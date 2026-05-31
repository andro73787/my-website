const content = {
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      education: "Education",
      skills: "Skills",
      projects: "Projects",
      hobbies: "Hobbies",
    },
    hero: {
      greeting: "Hello, I'm",
      name: "UNDARMAA",
      typewriter: [
        "Network Security Engineer",
        "IoT & Network Security Researcher",
        "Cybersecurity Enthusiast",
        "Master's Student at Oita University",
      ],
      subtitle:
        "Graduate student at Oita University, passionate about Network Security, IoT Security, and Web Security.",
      cta: "See My Work",
      github: "View GitHub",
      scroll: "Scroll Down",
      stats: [
        { label: "5+ Years in Japan" },
        { label: "2+ Years Network Engineer" },
        { label: "Network & IoT Security Researcher" },
        { label: "Master's Student" },
        { label: "Mongolian" },
      ],
    },
    about: {
      title: "About Me",
      bio: [
        "I'm Undarmaa, a 2nd Year Computer Science student at Oita University, Japan. I've been living in Japan for 5 years and I'm passionate about cybersecurity — especially Network Security, IoT Security, and Web Security.",
        "Currently studying cybersecurity and building security-related projects, always exploring new vulnerabilities, tools, and techniques in the security space.",
      ],
      details: {
        name: "Undarmaa",
        university: "Oita University, Japan",
        major: "Computer Science · 2nd Year",
        location: "Japan · Living in Japan for 5 years",
        focus: "Network, IoT & Web Security",
      },
      labels: {
        name: "Name",
        university: "University",
        major: "Major",
        location: "Location",
        focus: "Interests",
      },
    },
    experience: {
      title: "Experience",
      jobs: [
        {
          company: "IPTV System Operations",
          role: "Network Engineer",
          period: "Oct 2018 – Sep 2020",
          description: [
            "Network design, operation and management of IPTV systems",
            "Maintained stable communication environments",
            "Troubleshooting and resolving network failures",
            "Gained hands-on experience in network security",
          ],
        },
        {
          company: "University Final Year Project",
          role: "Student Developer (Internship)",
          period: "2017 – 2018",
          description: [
            "Developed a teacher introduction application for new students",
            "App showed course contents, teacher profiles and schedules",
            "First hands-on software development experience",
            "Gained practical programming skills",
          ],
        },
        {
          company: "Don Quijote Holdings, Japan",
          role: "Customer Service & Language Specialist",
          period: "2022 – Present",
          description: [
            "Communicated with diverse customers in Japanese",
            "Developed business-level Japanese language skills",
            "Adapted to Japanese work culture and environment",
            "Bridge between international and local communication",
          ],
        },
        {
          company: "Independent",
          role: "Self-taught Security Researcher",
          period: "2022 – Present",
          description: [
            "CTF competitions and web security research",
            "Studying IoT and network security independently",
            "Building security-related projects",
          ],
        },
        {
          company: "Institute of Systems, Information Technologies and Nanotechnologies (ISIT)\n公益財団法人 九州先端科学技術研究所",
          role: "Internship Student",
          period: "Summer 2025 (1 month+)",
          description: [
            "Developed a network traffic log analysis tool (Traffic Eye_Log Analyzer)",
            "Built and deployed a web application (Webアプリケーションの構築)",
            "Practiced web security vulnerabilities and penetration testing using DVWA — learned common attack vectors and defense methods",
            "Learned about Japanese organizational culture, work environment, and professional development",
          ],
        },
      ],
    },
    education: {
      title: "Education",
      items: [
        {
          school: "High School",
          faculty: "Mongolia",
          degree: "",
          year: "2003 – 2014",
          note: "Graduated",
        },
        {
          school: "Mongolian University of Science and Technology (MUST)",
          faculty: "Faculty of Information and Communication Technology · Department of Information Technology",
          degree: "B.Sc. Information Technology",
          year: "2014 – 2018",
          note: "Graduated",
        },
        {
          school: "East Japan Language School",
          faculty: "Japanese Language Program",
          degree: "",
          year: "2021 – 2023",
          note: "Graduated",
        },
        {
          school: "Oita University",
          faculty: "Research Student Program",
          degree: "",
          year: "2024 – 2025",
          note: "",
        },
        {
          school: "Oita University",
          faculty: "Graduate School of Science and Technology",
          degree: "Master's Program · Information, Mathematics and Data Science (Advanced Practical Course)",
          year: "2025 – 2027",
          note: "Expected Graduation",
        },
      ],
    },
    skills: {
      title: "Skills",
      categories: [
        {
          name: "Programming Languages",
          icon: "💻",
          type: "bar",
          items: [
            { name: "Python", sublabel: "Scripting & Automation", level: 75 },
            { name: "C Language", sublabel: "Basics", level: 45 },
            { name: "HTML / CSS", sublabel: "Web Frontend", level: 72 },
            { name: "React / JavaScript", sublabel: "Web Frontend", level: 70 },
          ],
        },
        {
          name: "Protocols",
          icon: "🔗",
          type: "tag",
          items: ["TCP/IP", "HTTP/HTTPS", "DNS", "SSH", "TLS", "CoAP", "DTLS", "MQTT", "ICMP", "UDP"],
        },
        {
          name: "OS & Environment",
          icon: "🖥️",
          type: "tag",
          items: ["Linux (Ubuntu / CentOS)", "Raspberry Pi (Raspbian OS)", "Virtual Machine (VM)"],
        },
        {
          name: "Network Security",
          icon: "🛡️",
          type: "bar",
          items: [
            { name: "IPTV Network Management", sublabel: "2 years experience", level: 85 },
            { name: "Wireshark / tcpdump", sublabel: "Packet Analysis", level: 78 },
            { name: "Log Analysis / Traffic Analysis", level: 75 },
            { name: "IDS/IPS · Snort", sublabel: "1 year study", level: 70 },
            { name: "Firewall Configuration", level: 68 },
            { name: "Data Encryption · OpenSSL", level: 68 },
            { name: "Incident Response", level: 65 },
          ],
        },
        {
          name: "IoT Security",
          icon: "📡",
          type: "bar",
          items: [
            { name: "Secure Network Operation", level: 70 },
            { name: "IoT Device Security Verification", level: 68 },
            { name: "Intrusion Detection Test Environment", level: 68 },
            { name: "CoAP / DTLS / MQTT", sublabel: "IoT Protocols", level: 68 },
            { name: "IoT Experimental System Construction", level: 65 },
            { name: "Sensor Data Transmission & Reception", level: 65 },
          ],
        },
        {
          name: "Web Security",
          icon: "🔐",
          type: "bar",
          items: [
            { name: "OWASP Top 10", level: 72 },
            { name: "SQL Injection Analysis", level: 70 },
            { name: "DVWA", sublabel: "Damn Vulnerable Web App", level: 70 },
            { name: "XSS Analysis", level: 68 },
            { name: "Secure Web Application Operation", level: 68 },
            { name: "Penetration Testing Basics", level: 65 },
          ],
        },
        {
          name: "Development Tools",
          icon: "🔧",
          type: "tag",
          items: ["VSCode", "Git / GitHub", "OpenSSL", "Wireshark", "tcpdump"],
        },
      ],
      languages: {
        title: "Languages",
        icon: "🌐",
        items: [
          { name: "Mongolian · Монгол", level: "Native" },
          {
            name: "English",
            level: "Business",
            details: [
              "Volunteer English interpreter in Mongolia",
              "Part-time interpretation work",
              "Translated between Mongolian and English speakers",
              "Built strong communication and interpretation skills",
            ],
          },
          { name: "Japanese · 日本語", level: "Business" },
        ],
        achievementsTitle: "🗣️ Japanese Language Achievements",
        achievements: [
          {
            year: "2023",
            title: "Participated in 20th Japanese Speech Contest for Foreign Students",
            subtitle: "第20回外国人による日本語スピーチコンテスト参加",
            note: "Topic: Japanese culture and international exchange",
          },
          {
            year: "2025",
            title: "Speech at Oita University International Student Association Board Meeting & General Assembly",
            subtitle: "留学生友の会理事会・総会にてスピーチ登壇",
            note: null,
          },
          {
            year: "2025",
            title: "Featured in Oita University International Student Official Newsletter",
            subtitle: "大分大学留学生広報誌に掲載",
            note: null,
          },
        ],
      },
    },
    projects: {
      title: "Projects",
      items: [
        {
          name: "CanSat Competition",
          description:
            "Participated in CanSat competition during 3rd year at MUST (2016). CanSat is a small satellite the size of a soda can designed to simulate space missions. Built embedded systems for sensor data collection and transmission, integrating hardware and software under real engineering constraints.",
          tech: ["Embedded Systems", "C/C++", "Sensor Integration", "Hardware Programming"],
          github: "#",
          demo: "#",
          period: "2016 · MUST 3rd Year",
          type: "Aerospace & Embedded Systems",
        },
        {
          name: "IoT Security Experiment System with Raspberry Pi IDS",
          description:
            "Research project at Oita University (2024) evaluating lightweight security solutions using Raspberry Pi. Built a complete IoT environment with Snort IDS, DHT11 sensor data collection, real-time web dashboard, and attack simulation using Kali Linux — testing DoS (Hping3), port scanning (Nmap), and brute force (Hydra) scenarios.",
          tech: ["Raspberry Pi 4", "Snort IDS", "MQTT / Mosquitto", "Python", "Kali Linux", "DHT11 Sensor", "Hping3 / Nmap / Hydra"],
          github: "#",
          demo: "#",
          period: "2024 · Oita University Research Student",
          type: "IoT Security Research",
        },
        {
          name: "Port Scanner",
          description:
            "A network port scanning tool built with Python. Detects open ports and running services on target systems — useful for network reconnaissance and security auditing.",
          tech: ["Python", "Network Programming", "TCP/IP"],
          github: "https://github.com/andro73787/port-scanner",
          demo: "#",
          type: "Network Security Tool",
        },
        {
          name: "Traffic Eye — Log Analyzer",
          description:
            "Network security tool developed during ISIT internship (2025). Automatically analyzes server logs (access.log, error.log) and visualizes data through graphs, enabling rapid identification of suspicious IPs and high-load situations — saving administrator time and improving security.",
          tech: ["Python", "Log Analysis", "Data Visualization", "Network Security"],
          github: "#",
          demo: "#",
          period: "2025 · ISIT Internship",
          type: "Network Security Tool",
        },
        {
          name: "Teacher Introduction Mobile App",
          description:
            "Developed a mobile application as a final year project at MUST (2017–2018). Designed for new students to explore teacher profiles, course content, and department schedules. First hands-on mobile app development experience.",
          tech: ["Mobile App", "UI/UX Design", "Database"],
          github: "#",
          demo: "#",
          period: "2017–2018 · MUST Final Year",
          type: "Mobile Application",
        },
      ],
    },
    hobbies: {
      title: "Hobbies & Free Time",
      categories: [
        {
          name: "Sports",
          icon: "🏃",
          items: [
            { icon: "🏀", label: "Basketball" },
            { icon: "🏊", label: "Swimming" },
            { icon: "🧘", label: "Yoga" },
            { icon: "🥾", label: "Hiking in nature / Mountain walking" },
          ],
          quote: "Being close to nature is my favorite way to recharge",
        },
        {
          name: "Learning & Self Development",
          icon: "📚",
          items: [
            { icon: "📖", label: "Reading books — technical, self-development, various genres" },
            { icon: "🗣️", label: "Daily language learning (English & Japanese)" },
            { icon: "💡", label: "Applying knowledge from books into real life" },
          ],
          quote: "I improve my languages every day because I want to read amazing books in their original language and apply knowledge in real life",
        },
        {
          name: "Tech Hobbies",
          icon: "💻",
          items: [
            { icon: "🚩", label: "CTF Security Competitions" },
            { icon: "🔐", label: "Security Research" },
            { icon: "🛠️", label: "Building personal projects" },
          ],
          quote: null,
        },
      ],
    },
    footer: {
      copy: "Designed & built by Undarmaa",
    },
  },

  ja: {
    nav: {
      about: "自己紹介",
      experience: "職歴",
      education: "学歴",
      skills: "スキル",
      projects: "プロジェクト",
      hobbies: "趣味",
    },
    hero: {
      greeting: "こんにちは、私は",
      name: "UNDARMAA",
      typewriter: [
        "ネットワークセキュリティエンジニア",
        "IoT・ネットワークセキュリティ研究者",
        "サイバーセキュリティ学生",
        "大分大学 大学院生",
      ],
      subtitle:
        "大分大学大学院生。ネットワーク・IoT・Webセキュリティを探求しています。",
      cta: "実績を見る",
      github: "GitHubを見る",
      scroll: "下へスクロール",
      stats: [
        { label: "日本在住5年以上" },
        { label: "ネットワークエンジニア 2年以上" },
        { label: "ネットワーク・IoTセキュリティ研究者" },
        { label: "大学院生" },
        { label: "モンゴル人" },
      ],
    },
    about: {
      title: "自己紹介",
      bio: [
        "大分大学コンピュータサイエンス学科2年生です。日本に住んで5年になります。",
        "ネットワークセキュリティ、IoTセキュリティ、Webセキュリティに興味があります。現在はサイバーセキュリティを学びながら、セキュリティ関連のプロジェクトに取り組んでいます。",
      ],
      details: {
        name: "ウンダルマー",
        university: "大分大学",
        major: "情報科学 · 2年生",
        location: "大分、日本 · 日本在住5年",
        focus: "ネットワーク・IoT・Webセキュリティ",
      },
      labels: {
        name: "名前",
        university: "大学",
        major: "専攻",
        location: "所在地",
        focus: "興味分野",
      },
    },
    experience: {
      title: "職歴",
      jobs: [
        {
          company: "IPTVシステム運用",
          role: "ネットワークエンジニア",
          period: "2018年10月 – 2020年9月",
          description: [
            "IPTVシステムの運用・管理およびネットワークエンジニアとして約2年間勤務",
            "ネットワークの設計・運用に携わり、安定した通信環境の維持や障害発生時の対応力を身につけました",
          ],
        },
        {
          company: "大学卒業研究プロジェクト",
          role: "学生開発者（インターンシップ）",
          period: "2017年 – 2018年",
          description: [
            "卒業年度に、新入生向けの教師紹介アプリケーションを開発",
            "授業内容や教師のプロフィールを紹介するシステムを構築し、実践的な開発経験を積みました",
          ],
        },
        {
          company: "Don Quijote Holdings（日本）",
          role: "カスタマーサービス・語学スペシャリスト",
          period: "2022年 – 現在",
          description: [
            "多くのお客様と日本語でコミュニケーションを取り、ビジネスレベルの日本語能力を習得",
            "日本のビジネス文化・職場環境への適応",
          ],
        },
        {
          company: "独立",
          role: "独学セキュリティリサーチャー",
          period: "2022年 – 現在",
          description: [
            "独学でセキュリティ研究を継続。CTF競技やIoT・Webセキュリティの研究に取り組んでいます",
            "セキュリティ関連プロジェクトの開発",
          ],
        },
        {
          company: "公益財団法人 九州先端科学技術研究所（ISIT）",
          role: "インターンシップ生",
          period: "2025年 夏（1ヶ月以上）",
          description: [
            "Traffic Eye_Log Analyzer — ネットワークトラフィックログ解析ツールの開発",
            "Webアプリケーションの構築 — Webアプリケーションの開発・デプロイ",
            "DVWA — Webセキュリティの脆弱性診断と侵入テストの実践（一般的な攻撃手法と防御策を習得）",
            "日本の組織文化・職場環境の理解、プロフェッショナルとしての成長",
          ],
        },
      ],
    },
    education: {
      title: "学歴",
      items: [
        {
          school: "高校（モンゴル）",
          faculty: "",
          degree: "",
          year: "2003年 – 2014年",
          note: "卒業",
        },
        {
          school: "モンゴル科学技術大学（MUST）",
          faculty: "情報通信工学部 情報技術学科",
          degree: "情報技術 学士",
          year: "2014年 – 2018年",
          note: "卒業",
        },
        {
          school: "東日本語学校",
          faculty: "日本語学科",
          degree: "",
          year: "2021年 – 2023年",
          note: "卒業",
        },
        {
          school: "大分大学",
          faculty: "研究生課程",
          degree: "",
          year: "2024年 – 2025年",
          note: "",
        },
        {
          school: "大分大学",
          faculty: "理工学研究科博士前期課程",
          degree: "理工学専攻 情報・数理・データサイエンスプログラム（高度実践系）",
          year: "2025年 – 2027年",
          note: "修了見込み",
        },
      ],
    },
    skills: {
      title: "スキル",
      categories: [
        {
          name: "プログラミング言語",
          icon: "💻",
          type: "bar",
          items: [
            { name: "Python", sublabel: "スクリプト作成・自動化処理", level: 75 },
            { name: "C言語", sublabel: "基礎", level: 45 },
            { name: "HTML / CSS", sublabel: "Webフロントエンド", level: 72 },
            { name: "React / JavaScript", sublabel: "Webフロントエンド", level: 70 },
          ],
        },
        {
          name: "プロトコル",
          icon: "🔗",
          type: "tag",
          items: ["TCP/IP", "HTTP/HTTPS", "DNS", "SSH", "TLS", "CoAP", "DTLS", "MQTT", "ICMP", "UDP"],
        },
        {
          name: "OS／環境",
          icon: "🖥️",
          type: "tag",
          items: ["Linux（Ubuntu／CentOS）", "Raspberry Pi（Raspbian OS）", "仮想マシン（VM）"],
        },
        {
          name: "ネットワークセキュリティ",
          icon: "🛡️",
          type: "bar",
          items: [
            { name: "IPTVネットワーク管理", sublabel: "2年間の実務経験", level: 85 },
            { name: "Wireshark / tcpdump", sublabel: "パケット解析", level: 78 },
            { name: "ログ解析・トラフィック分析", level: 75 },
            { name: "IDS/IPS · Snort", sublabel: "1年間学習", level: 70 },
            { name: "Firewall設定", level: 68 },
            { name: "データ暗号化・OpenSSL", level: 68 },
            { name: "インシデントレスポンス", level: 65 },
          ],
        },
        {
          name: "IoTセキュリティ",
          icon: "📡",
          type: "bar",
          items: [
            { name: "安全なネットワーク運用", level: 70 },
            { name: "IoTデバイスのセキュリティ検証", level: 68 },
            { name: "侵入検知テスト環境構築", level: 68 },
            { name: "CoAP / DTLS / MQTT", sublabel: "IoTプロトコル", level: 68 },
            { name: "IoT実験システム構築", level: 65 },
            { name: "センサーデータ送受信", level: 65 },
          ],
        },
        {
          name: "Webセキュリティ",
          icon: "🔐",
          type: "bar",
          items: [
            { name: "OWASP Top 10", level: 72 },
            { name: "SQLインジェクション分析", level: 70 },
            { name: "DVWA", sublabel: "Damn Vulnerable Web App", level: 70 },
            { name: "XSS脆弱性分析", level: 68 },
            { name: "安全なWebアプリケーション運用", level: 68 },
            { name: "ペネトレーションテスト基礎", level: 65 },
          ],
        },
        {
          name: "開発ツール",
          icon: "🔧",
          type: "tag",
          items: ["VSCode", "Git / GitHub", "OpenSSL", "Wireshark", "tcpdump"],
        },
      ],
      languages: {
        title: "言語",
        icon: "🌐",
        items: [
          { name: "モンゴル語", level: "ネイティブ" },
          {
            name: "英語",
            level: "ビジネスレベル",
            details: [
              "モンゴルでボランティアの英語通訳として活動",
              "パートタイムの通訳業務を担当",
              "英語とモンゴル語の通訳を実施",
              "コミュニケーション能力と語学力を向上",
            ],
          },
          { name: "日本語", level: "ビジネスレベル" },
        ],
        achievementsTitle: "🗣️ 日本語実績",
        achievements: [
          {
            year: "2023",
            title: "第20回外国人による日本語スピーチコンテスト参加",
            subtitle: "20th Japanese Speech Contest for Foreign Students",
            note: "テーマ：日本の文化や国際交流について",
          },
          {
            year: "2025",
            title: "留学生友の会理事会・総会にてスピーチ登壇",
            subtitle: "Oita University International Student Association Board Meeting & General Assembly",
            note: null,
          },
          {
            year: "2025",
            title: "大分大学留学生広報誌に掲載",
            subtitle: "Oita University International Student Official Newsletter",
            note: null,
          },
        ],
      },
    },
    projects: {
      title: "プロジェクト",
      items: [
        {
          name: "CanSat競技大会",
          description:
            "モンゴル科学技術大学3年次（2016年）にCanSat競技大会に参加。CanSatとは缶サイズの小型模擬衛星で、宇宙ミッションのシミュレーションを行うプロジェクトです。センサーデータの収集・送信、組み込みシステムのプログラミング、ハードウェアとソフトウェアの統合など、実践的なエンジニアリングスキルを習得しました。",
          tech: ["組み込みシステム", "C/C++", "センサー統合", "ハードウェアプログラミング"],
          github: "#",
          demo: "#",
          period: "2016年 · MUST 3年次",
          type: "航空宇宙・組み込みシステム",
        },
        {
          name: "Raspberry Pi IDS を用いた IoT セキュリティ実験システム",
          description:
            "大分大学研究生（2024年）として実施したIoTセキュリティ研究プロジェクト。Raspberry PiにSnort IDSを構成・デプロイし、DHT11センサーによる温湿度データ収集とWebダッシュボードへの可視化を実現。Kali Linux仮想マシンを使用し、DoS（Hping3）・ポートスキャン（Nmap）・ブルートフォース（Hydra）など複数の攻撃シナリオでIDSの性能を評価しました。",
          tech: ["Raspberry Pi 4", "Snort IDS", "MQTT / Mosquitto", "Python", "Kali Linux", "DHT11センサー", "Hping3 / Nmap / Hydra"],
          github: "#",
          demo: "#",
          period: "2024年 · 大分大学研究生",
          type: "IoTセキュリティ研究",
        },
        {
          name: "ポートスキャナー",
          description:
            "Pythonで開発したネットワークポートスキャナー。対象システムの開放ポートと実行中のサービスを検出し、ネットワークのセキュリティ監査に活用できるツールです。",
          tech: ["Python", "ネットワークプログラミング", "TCP/IP"],
          github: "https://github.com/andro73787/port-scanner",
          demo: "#",
          type: "ネットワークセキュリティツール",
        },
        {
          name: "Traffic Eye — ログ解析ツール",
          description:
            "ISITインターンシップ（2025年）で開発したネットワークセキュリティツール。サーバーログ（access.log、error.log）を自動解析し、グラフで可視化することで、疑わしいIPや高負荷状態を迅速に特定。管理者の作業時間を節約し、セキュリティを向上させます。",
          tech: ["Python", "ログ解析", "データ可視化", "ネットワークセキュリティ"],
          github: "#",
          demo: "#",
          period: "2025年 · ISITインターンシップ",
          type: "ネットワークセキュリティツール",
        },
        {
          name: "教師紹介モバイルアプリ",
          description:
            "モンゴル科学技術大学の卒業年度（2017〜2018年）に、新入生向け教師紹介アプリを開発。教師のプロフィールや授業内容・学科スケジュールを紹介するアプリで、初めての実践的なモバイルアプリ開発経験となりました。",
          tech: ["モバイルアプリ", "UI/UXデザイン", "データベース"],
          github: "#",
          demo: "#",
          period: "2017〜2018年 · MUST 卒業年度",
          type: "モバイルアプリケーション",
        },
      ],
    },
    hobbies: {
      title: "趣味・自由時間",
      categories: [
        {
          name: "スポーツ",
          icon: "🏃",
          items: [
            { icon: "🏀", label: "バスケットボール" },
            { icon: "🏊", label: "水泳" },
            { icon: "🧘", label: "ヨガ" },
            { icon: "🥾", label: "登山・ハイキング" },
          ],
          quote: "自然の中にいることが一番好きなリフレッシュ方法です",
        },
        {
          name: "学習・自己成長",
          icon: "📚",
          items: [
            { icon: "📖", label: "読書（技術書・自己啓発・様々なジャンル）" },
            { icon: "🗣️", label: "毎日の英語・日本語学習" },
            { icon: "💡", label: "本から学んだことを実生活に活かす" },
          ],
          quote: "素晴らしい本をその言語で読み、学んだことを実生活に活かしたいという強い思いが、毎日の学習を続ける原動力になっています",
        },
        {
          name: "技術的な趣味",
          icon: "💻",
          items: [
            { icon: "🚩", label: "CTFセキュリティ競技" },
            { icon: "🔐", label: "セキュリティリサーチ" },
            { icon: "🛠️", label: "個人プロジェクトの開発" },
          ],
          quote: null,
        },
      ],
    },
    footer: {
      copy: "デザイン・開発：ウンダルマー",
    },
  },
};

export default content;
