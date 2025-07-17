import Image from "next/image";
import { Mail, Phone, MapPin, Globe, Github } from "lucide-react";

export default function Home() {
  return (
    <div
      style={{
        fontFamily: "var(--font-satoshi)",
        backgroundColor: "#222831",
        color: "#94B4C1",
      }}
      className="min-h-screen  text-white p-8"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="mb-8">
          <h1 className=" text-4xl font-bold mb-2">Fabrício Palmeira Rocha</h1>
          <p className="text-xl text-gray-300 mb-4">Desenvolvedor FullStack</p>

          <div className="flex flex-wrap gap-6 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <a
                href="https://www.linkedin.com/in/fabriciopalmeirarocha/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                <span>LinkedIn</span>
              </a>
            </div>
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/fabricior0cha"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-white"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>fabriciopalmeira.dev@gmail.com</span>
            </div>

            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>São Paulo, Brasil</span>
            </div>
          </div>
        </header>

        {/* Professional Summary */}
        <section className="mb-8">
          <p className="text-gray-300 leading-relaxed">
            Desenvolvedor Fullstack com mais de três anos de experiência atuando
            em projetos de grande escala, tanto no backend quanto no frontend.
          </p>
          <p className="text-gray-300 leading-relaxed mt-4">
            Atuei em iniciativas estratégicas para órgãos do governo de São
            Paulo — como Detran, Secretaria da Saúde e Secretaria da Agricultura
            e Abastecimento — e em instituições financeiras como o Santander.
            Tenho sólida experiência com arquiteturas baseadas em microsserviços
            e microfrontends, além de ampla familiaridade com os principais
            provedores de nuvem: Azure, AWS e GCP.
          </p>
        </section>

        {/* Work Experience */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Experiência Profissional</h2>

          <div className="mb-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="">
                <Image
                  src="/f1rst.png"
                  alt="F1RST Logo"
                  width={48}
                  height={48}
                  className="rounded-lg"
                  unoptimized
                />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold">
                  Desenvolvedor FullStack • F1RST
                </h3>
                <p className="text-gray-400">Ago 2024 • Atual</p>
              </div>
            </div>
            <ul className="text-gray-300 space-y-2 ml-16">
              <li>
                • Modelei e implementei APIs RESTful seguindo boas práticas de
                versionamento, segurança e escalabilidade, garantindo integração
                fluida entre sistemas.
              </li>
              <li>
                • Documentei todas as interfaces utilizando ferramentas padrão
                (ex: Swagger/OpenAPI), promovendo clareza e autonomia para times
                consumidores.
              </li>
              <li>
                • Otimizei o tempo de build de aplicações Angular, ajustando
                configurações dos projetos, acelerando o ciclo de deploy.
              </li>
              <li>
                • Reduzi significativamente o tempo de consultas SQL com o
                desenvolvimento de funções otimizadas no PostgreSQL, promovendo
                reuso, encapsulamento de lógica e maior eficiência nas operações
                complexas.
              </li>
              <li>
                • Atuo como federado interno (SRE e API), prestando suporte
                técnico à area que estou alocado, facilitando processos e
                garantindo as boas práticas.
              </li>
              <li>
                Tecnologias: Angular, Spring, Apache Camel, Postgres,
                Microsserviços, Microfrontends, AWS (API Gateway, Lambda,
                CloudWatch, S3), SRE, REST APIS, Observabilidade, Kibana,
                Docker, Kubernetes.
              </li>
            </ul>
          </div>
          <div className="mb-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="">
                <Image
                  src="/almaviva_solutions_logo.jpeg"
                  alt="AlmaViva Solutions Logo"
                  width={48}
                  height={48}
                  className="rounded-lg"
                  unoptimized
                />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold">
                  Desevolvedor FullStack • AlmaViva Solutions
                </h3>
                <p className="text-gray-400">Mar 2022 • Ago 2024</p>
              </div>
            </div>
            <ul className="text-gray-300 space-y-2 ml-16">
              <li>
                • Fui responsável pela migração e desenvolvimento do módulo SISP
                em React e Spring, solução utilizada por mais de 1.000
                estabelecimentos para certificação de produtos de origem animal,
                garantindo conformidade e rastreabilidade no estado de São
                Paulo.
              </li>
              <li>
                • Desenvolvi a funcionalidade de emissão de GTAs (Guias de
                Trânsito Animal), que movimenta mais de 640 milhões de animais
                por ano, garantindo garantindo a rastreabilidade sanitária em
                larga escala.
              </li>
              <li>
                • Implementei integrações com o sistema Sem Papel e Inquérito
                policial, agilizando o fluxo entre órgãos públicos.
              </li>
              <li>
                • Automatizei o processo de compressão de imagens em Python,
                reduzindo o tamanho de anexos em relatórios de fiscalização e
                melhorando a performance.
              </li>
              <li>
                • Otimizei consultas SQL para relatórios operacionais, reduzindo
                tempo de geração e carga no banco de dados.
              </li>
              <li>
                • Participei de decisões de arquitetura e construção de
                componentes reutilizáveis, promovendo padronização e
                escalabilidade.
              </li>
              <li>
                Tecnologias: React, Java, Spring, Node.js, Python, TypeScript,
                CI/CD, GCP, SQL, Docker, Kubernetes, Microsserviços.
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Educação</h2>

          {/* Bachelor's Degree */}
          <div className="mb-6">
            <div className="flex items-start gap-4">
              <div className="">
                <Image
                  src="/uam.png"
                  alt="Anhembi Morumbi Logo"
                  width={48}
                  height={48}
                  className="rounded-lg"
                  unoptimized
                />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold">
                  Universidade Anhembi Morumbi
                </h3>
                <p className="text-gray-400 mb-1">2022 • 2025</p>
                <p className="text-gray-300">
                  Bacharel em Sistemas de Informação
                </p>
              </div>
            </div>
          </div>

          {/* Certification */}
          <div className="mb-6">
            <div className="flex items-start gap-4">
              <div className="">
                <Image
                  src="/azure.png"
                  alt="Azure Logo"
                  width={48}
                  height={48}
                  className="rounded-lg"
                  unoptimized
                />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold">Azure</h3>
                <p className="text-gray-400 mb-1">2023</p>
                <p className="text-gray-300">
                  Microsoft Certified: Azure Fundamentals
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills and Other Sections */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div>
            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">Cursos complementares</h2>
              <div className="text-gray-300">
                <p>Generation - Bootcamp Pessoa Desenvolvedora FullStack</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">Conhecimento técnico</h2>
              <div className="text-gray-300 space-y-2">
                <p>
                  <strong>Linguagens:</strong> Javascript, TypeScript, Python,
                  Java, SQL, HTML, CSS.
                </p>
                <p>
                  <strong>Frameworks:</strong> React, Angular, Node.js, Spring,
                  Fastify, Express.
                </p>
                <p>
                  <strong>Tools:</strong> Git, Webpack, Babel, npm, Docker,
                  Kubernetes, CI/CD.
                </p>
                <p>
                  <strong>Teste:</strong> Jest, Cucumber, JUnit, Storybook,
                  Mockito.
                </p>
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div>
            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">Habilidades técnicas</h2>
              <div className="text-gray-300">
                <p>
                  UX, Design System, Arquitetura de Software, Microsserviços,
                  Microfrontends, REST APIs, Observabilidade, SRE, DevOps,
                  Integração Contínua, Entrega Contínua, Testes Automatizados,
                  Metodologias Ágeis (Scrum, Kanban), Visão Computacional.
                </p>
              </div>
            </section>
            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">Idiomas:</h2>
              <div className="text-gray-300 space-y-2">
                <p>
                  <strong>Inglês:</strong> Profissional e conversacional.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
