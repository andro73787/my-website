
#!/usr/bin/env python3
"""
Port Scanner Tool
Author: Andromel
Description: A simple yet powerful port scanner for network security analysis.
"""

import socket
import argparse
import concurrent.futures
from datetime import datetime

# Common ports and their services
COMMON_PORTS = {
    21: "FTP",
    22: "SSH",
    23: "Telnet",
    25: "SMTP",
    53: "DNS",
    80: "HTTP",
    110: "POP3",
    143: "IMAP",
    443: "HTTPS",
    445: "SMB",
    3306: "MySQL",
    3389: "RDP",
    5432: "PostgreSQL",
    6379: "Redis",
    8080: "HTTP-Alt",
    8443: "HTTPS-Alt",
    27017: "MongoDB",
}


def scan_port(host: str, port: int, timeout: float = 1.0) -> dict:
    """
    Scan a single port on the target host.
    
    Args:
        host: Target IP address or hostname
        port: Port number to scan
        timeout: Connection timeout in seconds
    
    Returns:
        Dictionary with port scan results
    """
    result = {
        "port": port,
        "status": "closed",
        "service": COMMON_PORTS.get(port, "unknown"),
        "banner": None
    }

    try:
        sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        sock.settimeout(timeout)
        connection = sock.connect_ex((host, port))

        if connection == 0:
            result["status"] = "open"
            # Try to grab banner
            try:
                sock.send(b"HEAD / HTTP/1.0\r\n\r\n")
                banner = sock.recv(1024).decode("utf-8", errors="ignore").strip()
                if banner:
                    result["banner"] = banner[:100]  # Limit banner length
            except Exception:
                pass

        sock.close()

    except socket.gaierror:
        result["status"] = "error"
        result["error"] = "Hostname could not be resolved"
    except socket.error:
        result["status"] = "error"
        result["error"] = "Could not connect to server"

    return result


def scan_range(host: str, start_port: int, end_port: int,
               timeout: float = 1.0, threads: int = 100) -> list:
    """
    Scan a range of ports using multi-threading for speed.
    
    Args:
        host: Target IP address or hostname
        start_port: Starting port number
        end_port: Ending port number
        timeout: Connection timeout in seconds
        threads: Number of concurrent threads
    
    Returns:
        List of open port results
    """
    open_ports = []
    ports = range(start_port, end_port + 1)

    print(f"\n{'='*50}")
    print(f"  Port Scanner")
    print(f"{'='*50}")
    print(f"  Target  : {host}")
    print(f"  Range   : {start_port} - {end_port}")
    print(f"  Started : {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    print(f"{'='*50}\n")

    with concurrent.futures.ThreadPoolExecutor(max_workers=threads) as executor:
        futures = {
            executor.submit(scan_port, host, port, timeout): port
            for port in ports
        }

        for future in concurrent.futures.as_completed(futures):
            result = future.result()
            if result["status"] == "open":
                open_ports.append(result)
                service = result["service"]
                print(f"  [OPEN] Port {result['port']:5d}  →  {service}")

    open_ports.sort(key=lambda x: x["port"])
    return open_ports


def print_summary(host: str, open_ports: list, duration: float):
    """Print a formatted summary of scan results."""
    print(f"\n{'='*50}")
    print(f"  SCAN COMPLETE")
    print(f"{'='*50}")
    print(f"  Host       : {host}")
    print(f"  Open ports : {len(open_ports)}")
    print(f"  Duration   : {duration:.2f} seconds")
    print(f"{'='*50}\n")

    if open_ports:
        print(f"  {'PORT':<8} {'SERVICE':<15} {'BANNER'}")
        print(f"  {'-'*45}")
        for p in open_ports:
            banner = p['banner'][:40] if p['banner'] else "-"
            print(f"  {p['port']:<8} {p['service']:<15} {banner}")
    else:
        print("  No open ports found.")
    print()


def main():
    parser = argparse.ArgumentParser(
        description="Port Scanner - Network Security Tool",
        formatter_class=argparse.RawTextHelpFormatter,
        epilog="""
Examples:
  python scanner.py scanme.nmap.org
  python scanner.py scanme.nmap.org -s 1 -e 1000
  python scanner.py 192.168.1.1 -s 80 -e 443
  python scanner.py scanme.nmap.org --common
        """
    )
    parser.add_argument("host", help="Target IP address or hostname")
    parser.add_argument("-s", "--start", type=int, default=1,
                        help="Start port (default: 1)")
    parser.add_argument("-e", "--end", type=int, default=1024,
                        help="End port (default: 1024)")
    parser.add_argument("-t", "--timeout", type=float, default=1.0,
                        help="Timeout in seconds (default: 1.0)")
    parser.add_argument("--threads", type=int, default=100,
                        help="Number of threads (default: 100)")
    parser.add_argument("--common", action="store_true",
                        help="Scan only common ports")

    args = parser.parse_args()

    # Resolve hostname
    try:
        target_ip = socket.gethostbyname(args.host)
        if target_ip != args.host:
            print(f"\n  Resolved {args.host} → {target_ip}")
    except socket.gaierror:
        print(f"\n  [ERROR] Cannot resolve hostname: {args.host}")
        return

    start_time = datetime.now()

    if args.common:
        # Scan only common ports
        print(f"\n{'='*50}")
        print(f"  Port Scanner — Common Ports Mode")
        print(f"{'='*50}")
        print(f"  Target  : {args.host}")
        print(f"  Ports   : {len(COMMON_PORTS)} common ports")
        print(f"  Started : {start_time.strftime('%Y-%m-%d %H:%M:%S')}")
        print(f"{'='*50}\n")

        open_ports = []
        for port in COMMON_PORTS:
            result = scan_port(args.host, port, args.timeout)
            if result["status"] == "open":
                open_ports.append(result)
                print(f"  [OPEN] Port {port:5d}  →  {COMMON_PORTS[port]}")
    else:
        open_ports = scan_range(
            args.host, args.start, args.end,
            args.timeout, args.threads
        )

    duration = (datetime.now() - start_time).total_seconds()
    print_summary(args.host, open_ports, duration)


if __name__ == "__main__":
    main()