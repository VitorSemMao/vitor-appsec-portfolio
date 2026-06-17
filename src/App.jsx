import { useEffect, useState } from 'react'
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BookOpen,
  Bug,
  Code2,
  Database,
  Download,
  FileSearch,
  Github,
  GitBranch,
  GlobeLock,
  GraduationCap,
  House,
  KeyRound,
  Languages,
  Linkedin,
  Mail,
  MapPin,
  MoonStar,
  Phone,
  ShieldCheck,
  SunMedium,
  TerminalSquare,
} from 'lucide-react'
import './App.css'

const sectionLinks = [
  { href: '#home', label: 'Home', icon: House },
  { href: '#skills', label: 'Skills', icon: ShieldCheck },
  { href: '#projects', label: 'Projetos', icon: FileSearch },
  { href: '#journey', label: 'Trajetória', icon: GraduationCap },
  { href: '#contact', label: 'Contato', icon: Mail },
]

const heroBadges = [
  'AppSec',
  'Web/API Security',
  'Python',
  'JavaScript',
  'Burp Suite',
]

const summaryCards = [
  { value: '7º semestre', label: 'Ciência da Computação' },
  { value: '12/2026', label: 'Conclusão prevista' },
  { value: 'Brasília/DF', label: 'Disponibilidade imediata' },
  { value: 'PcD', label: 'Elegível para vagas afirmativas' },
]

const technologies = [
  {
    icon: ShieldCheck,
    title: 'OWASP Top 10',
    text: 'Leitura prática de vulnerabilidades com foco em impacto, correção e reteste.',
  },
  {
    icon: GlobeLock,
    title: 'Web/API Security',
    text: 'Autenticação, autorização, BOLA/IDOR, JWT, sessões e tráfego HTTP/JSON.',
  },
  {
    icon: KeyRound,
    title: 'Controle de acesso',
    text: 'Análise de ownership server-side, troca de identificadores e falhas lógicas.',
  },
  {
    icon: Bug,
    title: 'Falhas exploradas',
    text: 'XSS, SQLi, NoSQLi, mass assignment, cookies, CSRF e WebSockets.',
  },
  {
    icon: TerminalSquare,
    title: 'Ferramentas',
    text: 'Burp Suite, Kali Linux, terminal Linux, Git/GitHub e automações com Bash.',
  },
  {
    icon: Code2,
    title: 'Desenvolvimento',
    text: 'Python, JavaScript, Go, C, C++, APIs REST, CRUD e debugging.',
  },
  {
    icon: Database,
    title: 'Dados e modelagem',
    text: 'SQL, modelagem de dados, estrutura cliente-servidor e organização técnica.',
  },
  {
    icon: GitBranch,
    title: 'Documentação técnica',
    text: 'Registro de evidências, causa raiz, correção sugerida e fluxo de reteste.',
  },
]

const projects = [
  {
    icon: FileSearch,
    title: 'Auditoria de APIs REST em ambiente controlado',
    description:
      'Testes focados em autorização e exposição indevida de recursos, simulando cenários reais de uso incorreto de APIs.',
    bullets: [
      'Troca de identificadores para validar BOLA/IDOR',
      'Análise de requisições HTTP/JSON no Burp Suite',
      'Verificação server-side da propriedade do recurso',
    ],
    tags: ['BOLA/IDOR', 'Burp Suite', 'HTTP/JSON', 'Autorização'],
  },
  {
    icon: ShieldCheck,
    title: 'Exploração prática de falhas web e de API',
    description:
      'Reprodução de cenários envolvendo autenticação, sessões, cookies e vulnerabilidades comuns em aplicações de laboratório.',
    bullets: [
      'Mass assignment, XSS, SQLi e NoSQLi',
      'Falhas lógicas e mensagens via WebSocket',
      'Separação entre sintoma, impacto e causa raiz',
    ],
    tags: ['XSS', 'SQLi', 'Sessões', 'WebSockets'],
  },
  {
    icon: Code2,
    title: 'API acadêmica com automação defensiva',
    description:
      'Estudo e construção de APIs CRUD com SQL, apoiadas por scripts que ajudam a consultar e organizar informações.',
    bullets: [
      'Estrutura cliente-servidor com versionamento Git',
      'Scripts em Bash/Python para apoiar consultas',
      'Visão de segurança desde o desenho da aplicação',
    ],
    tags: ['Python', 'Bash', 'SQL', 'APIs REST'],
  },
]

const journey = [
  {
    icon: GraduationCap,
    title: 'UniCEUB',
    subtitle: 'Bacharelado em Ciência da Computação',
    text: '7º semestre com conclusão prevista para dezembro de 2026.',
  },
  {
    icon: BadgeCheck,
    title: 'Clavis Segurança da Informação',
    subtitle: 'Preparatório EXIN Information Security Foundation',
    text: 'Treinamento de 25 horas concluído em 17/06/2026.',
  },
  {
    icon: BookOpen,
    title: 'Cisco Networking Academy',
    subtitle: 'Introduction to Cybersecurity + Cybersecurity Essentials',
    text: 'Estudos complementares em andamento para aprofundar fundamentos e visão operacional.',
  },
]

const differentiators = [
  'Inglês proficiente para leitura técnica, escrita e conversação',
  'Espanhol básico',
  'Raciocínio lógico e atenção a detalhes',
  'Comunicação técnica e colaboração em time',
]

const contacts = [
  {
    icon: Mail,
    label: 'Email',
    value: 'vitor.pcosta04@gmail.com',
    href: 'mailto:vitor.pcosta04@gmail.com',
  },
  {
    icon: Phone,
    label: 'Telefone',
    value: '+55 61 9528-1417',
    href: 'tel:+556195281417',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/vitorpereiracosta',
    href: 'https://www.linkedin.com/in/vitorpereiracosta',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/VitorSemMao',
    href: 'https://github.com/VitorSemMao',
  },
]

function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="section-header">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}

function App() {
  const [theme, setTheme] = useState(() => {
    if (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      return 'dark'
    }

    return 'light'
  })
  const [hoveredNav, setHoveredNav] = useState(null)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  return (
    <div className="portfolio-shell">
      <header className="site-header">
        <a className="brand" href="#home">
          <span className="brand-mark">VP</span>
          <span className="brand-text">
            <strong>Vitor Pereira</strong>
            <small>Portfolio</small>
          </span>
        </a>

        <button
          className="theme-toggle"
          type="button"
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          aria-label={theme === 'light' ? 'Ativar tema escuro' : 'Ativar tema claro'}
        >
          {theme === 'light' ? <MoonStar size={18} /> : <SunMedium size={18} />}
        </button>
      </header>

      <nav
        className="floating-dock"
        aria-label="Seções principais"
        onMouseLeave={() => setHoveredNav(null)}
      >
        {sectionLinks.map((item, index) => {
          const Icon = item.icon
          const distance =
            hoveredNav === null ? null : Math.abs(hoveredNav - index)
          const scale =
            distance === null
              ? 1
              : distance === 0
                ? 1.24
                : distance === 1
                  ? 1.12
                  : distance === 2
                    ? 1.04
                    : 1

          return (
            <a
              key={item.href}
              href={item.href}
              className="dock-item"
              style={{ '--dock-scale': scale }}
              onMouseEnter={() => setHoveredNav(index)}
              onFocus={() => setHoveredNav(index)}
              onBlur={() => setHoveredNav(null)}
              aria-label={`Ir para ${item.label}`}
            >
              <span className="dock-tooltip">{item.label}</span>
              <span className="dock-icon-wrap">
                <Icon size={20} />
              </span>
            </a>
          )
        })}
      </nav>

      <main>
        <section className="hero-section" id="home">
          <div className="hero-copy">
            <span className="hero-eyebrow">Olá, eu sou</span>
            <h1>
              <span className="hero-name">Vitor Pereira da Costa</span>
              <span className="hero-role">
                Desenvolvedor júnior com foco em AppSec e segurança de Web/API.
              </span>
            </h1>
            <p className="hero-description">
              Estudante de Ciência da Computação com prática em laboratório na
              identificação de vulnerabilidades, análise de fluxos HTTP/JSON e
              documentação clara de evidências, impacto, causa raiz, correção e
              reteste.
            </p>

            <div className="hero-actions">
              <a className="button-primary" href="#projects">
                Meus projetos
                <ArrowRight size={18} />
              </a>
              <a
                className="button-secondary"
                href="/docs/curriculo-vitor-pereira-da-costa.pdf"
                target="_blank"
                rel="noreferrer"
                download
              >
                Baixar currículo
                <Download size={18} />
              </a>
            </div>

            <div className="social-row">
              <a href="https://github.com/VitorSemMao" target="_blank" rel="noreferrer" aria-label="Perfil no GitHub">
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/vitorpereiracosta"
                target="_blank"
                rel="noreferrer"
                aria-label="Perfil no LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a href="mailto:vitor.pcosta04@gmail.com" aria-label="Enviar e-mail">
                <Mail size={18} />
              </a>
            </div>

            <div className="badge-row">
              {heroBadges.map((item) => (
                <span key={item} className="hero-badge">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="hero-panel">
            <div className="intro-card">
              <span className="eyebrow">Resumo profissional</span>
              <p>
                Perfil orientado a entender como uma aplicação funciona por
                dentro, onde pode falhar e como traduzir isso em melhoria
                concreta para o time.
              </p>
            </div>

            <div className="summary-grid">
              {summaryCards.map((item) => (
                <article key={item.label} className="summary-card">
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </article>
              ))}
            </div>

            <a className="scroll-cue" href="#skills">
              <ArrowDown size={16} />
              Role para ver mais
            </a>
          </div>
        </section>
@@
        

        <section className="content-section" id="skills">
          <SectionHeader
            eyebrow="Tecnologias"
            title="Competências técnicas em segurança de aplicações e desenvolvimento"
            description="Resumo das principais áreas de conhecimento em AppSec, análise de vulnerabilidades, ferramentas de investigação e desenvolvimento."
          />

          <div className="tech-grid">
            {technologies.map((item) => {
              const Icon = item.icon

              return (
                <article key={item.title} className="tech-card">
                  <div className="tech-icon">
                    <Icon size={22} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              )
            })}
          </div>
        </section>

        <section className="content-section" id="projects">
          <SectionHeader
            eyebrow="Projetos"
            title="Projetos e estudos de caso"
            description="Seleção de experiências práticas com foco em segurança de aplicações, APIs, investigação técnica e documentação."
          />

          <div className="project-grid">
            {projects.map((project) => {
              const Icon = project.icon

              return (
                <article key={project.title} className="project-card">
                  <div className="project-head">
                    <div className="project-icon">
                      <Icon size={22} />
                    </div>
                    <span>Ambiente controlado</span>
                  </div>

                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <ul className="project-bullets">
                    {project.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>

                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </article>
              )
            })}
          </div>
        </section>

        <section className="content-section journey-layout" id="journey">
          <div className="journey-main">
            <SectionHeader
              eyebrow="Trajetória"
              title="Formação, certificações e desenvolvimento profissional"
              description="Base acadêmica e trilha de estudos voltadas para segurança da informação, desenvolvimento de software e evolução técnica contínua."
            />

            <div className="journey-grid">
              {journey.map((item) => {
                const Icon = item.icon

                return (
                  <article key={item.title} className="journey-card">
                    <div className="journey-icon">
                      <Icon size={20} />
                    </div>
                    <h3>{item.title}</h3>
                    <strong>{item.subtitle}</strong>
                    <p>{item.text}</p>
                  </article>
                )
              })}
            </div>
          </div>

          <aside className="journey-side">
            <div className="mini-panel">
              <span className="eyebrow">Idiomas e diferenciais</span>
              <h3>Como eu colaboro com um time</h3>

              <div className="differential-list">
                {differentiators.map((item) => (
                  <div key={item} className="differential-item">
                    <Languages size={16} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mini-panel accent">
              <span className="eyebrow">Objetivo profissional</span>
              <h3>Atuar como desenvolvedor júnior com foco em AppSec</h3>
              <p>
                Busco uma oportunidade para evoluir em segurança de aplicações,
                APIs e análise técnica, contribuindo com investigação, correção
                e documentação clara para o time.
              </p>
            </div>
          </aside>
        </section>

        <section className="content-section contact-section" id="contact">
          <SectionHeader
            eyebrow="Contato"
            title="Contato e informações profissionais"
            description="Canais para contato, perfil profissional e links públicos para acompanhamento de projetos e experiência técnica."
          />

          <div className="contact-layout">
            <div className="contact-spotlight">
              <span className="eyebrow">Disponível para oportunidade</span>
              <h3>Desenvolvedor júnior | AppSec e Web/API Security</h3>
              <p>
                Busco vagas em que eu possa unir base de desenvolvimento com
                investigação técnica, segurança de aplicações e documentação de
                qualidade.
              </p>
              <div className="spotlight-meta">
                <span>
                  <MapPin size={16} />
                  Brasília/DF
                </span>
                <span>
                  <ShieldCheck size={16} />
                  Foco em segurança aplicada
                </span>
              </div>
            </div>

            <div className="contact-grid">
              {contacts.map((item) => {
                const Icon = item.icon

                return (
                  <a
                    key={item.label}
                    className="contact-card"
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                  >
                    <div className="contact-icon">
                      <Icon size={18} />
                    </div>
                    <div>
                      <span>{item.label}</span>
                      <strong>{item.value}</strong>
                    </div>
                    <ArrowUpRight size={16} />
                  </a>
                )
              })}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
