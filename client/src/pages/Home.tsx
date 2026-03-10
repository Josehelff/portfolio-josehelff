import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail, ExternalLink, Code2, Briefcase, Award, MessageCircle } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-primary">JOH</div>
          <div className="flex gap-6">
            <a href="#experience" className="hover:text-primary transition">Experiência</a>
            <a href="#projects" className="hover:text-primary transition">Projetos</a>
            <a href="#skills" className="hover:text-primary transition">Competências</a>
            <a href="#contact" className="hover:text-primary transition">Contato</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-background via-background to-secondary/20">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="space-y-6">
                <div className="space-y-3">
                  <p className="text-primary font-semibold text-lg">Bem-vindo 👋</p>
                  <h1 className="text-foreground">José Otávio Helff</h1>
                  <p className="text-2xl md:text-3xl text-muted-foreground font-light">
                    Desenvolvedor Java | Spring Boot | APIs REST
                  </p>
                </div>
                
                <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                  Desenvolvedor Java com experiência prática em backend, especializado em Spring Boot e desenvolvimento de APIs REST. Apaixonado por criar soluções escaláveis e de alta performance.
                </p>

                <div className="flex gap-4 pt-4">
                  <a href="https://github.com/Josehelff" target="_blank" rel="noopener noreferrer">
                    <Button variant="default" size="lg" className="gap-2">
                      <Github className="w-5 h-5" />
                      GitHub
                    </Button>
                  </a>
                  <a href="mailto:josehelff@gmail.com">
                    <Button variant="outline" size="lg" className="gap-2">
                      <Mail className="w-5 h-5" />
                      Email
                    </Button>
                  </a>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-3xl"></div>
                <div className="relative bg-card rounded-2xl p-8 border border-border shadow-lg">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Code2 className="w-6 h-6 text-primary" />
                      <div>
                        <p className="font-semibold">Stack Técnico</p>
                        <p className="text-sm text-muted-foreground">Java, Spring Boot, PostgreSQL</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Briefcase className="w-6 h-6 text-primary" />
                      <div>
                        <p className="font-semibold">Experiência</p>
                        <p className="text-sm text-muted-foreground">2+ anos em desenvolvimento</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Award className="w-6 h-6 text-primary" />
                      <div>
                        <p className="font-semibold">Formação</p>
                        <p className="text-sm text-muted-foreground">Análise e Desenvolvimento de Sistemas</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 md:py-32 bg-background">
        <div className="container max-w-6xl mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-foreground mb-12">Experiência Profissional</h2>
          </ScrollReveal>
          
          <div className="space-y-8">
            {/* Atos Brasil - Dev */}
            <ScrollReveal delay={100}>
              <Card className="p-8 border border-border hover:border-primary/50 transition">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                  <div>
                    <h3 className="text-primary font-semibold">Desenvolvedor Java Júnior</h3>
                    <p className="text-muted-foreground">Atos Brasil</p>
                  </div>
                  <span className="text-sm text-muted-foreground whitespace-nowrap">Set/2023 – 2025</span>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-primary">•</span>
                    <span>Desenvolvimento de 5+ APIs REST com Java 17 e Spring Boot 3</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">•</span>
                    <span>Implementação de regras de negócio e otimização de performance (15% redução de tempo)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">•</span>
                    <span>Integração com PostgreSQL usando Spring Data JPA e Hibernate</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">•</span>
                    <span>Implementação de autenticação com Spring Security e JWT</span>
                  </li>
                </ul>
              </Card>
            </ScrollReveal>

            {/* Atos Brasil - Suporte N2 */}
            <ScrollReveal delay={200}>
              <Card className="p-8 border border-border hover:border-primary/50 transition">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                  <div>
                    <h3 className="text-primary font-semibold">Técnico de Suporte ao Usuário N2 – Pleno</h3>
                    <p className="text-muted-foreground">Atos Brasil | Projeto: ONS</p>
                  </div>
                  <span className="text-sm text-muted-foreground whitespace-nowrap">2022 – 2024</span>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-primary">•</span>
                    <span>Suporte técnico para 200+ usuários em ambiente crítico</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">•</span>
                    <span>Diagnóstico e resolução de problemas complexos de software e hardware</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">•</span>
                    <span>Documentação técnica e otimização de processos (20% redução de tempo)</span>
                  </li>
                </ul>
              </Card>
            </ScrollReveal>

            {/* Atos Brasil - Suporte N1 */}
            <ScrollReveal delay={300}>
              <Card className="p-8 border border-border hover:border-primary/50 transition">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                  <div>
                    <h3 className="text-primary font-semibold">Técnico de Suporte ao Usuário N1 – Júnior</h3>
                    <p className="text-muted-foreground">Atos Brasil | Projeto: Votorantim</p>
                  </div>
                  <span className="text-sm text-muted-foreground whitespace-nowrap">2022</span>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-primary">•</span>
                    <span>Suporte técnico N1 para 50+ chamados diários</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">•</span>
                    <span>Instalação e configuração de softwares em 300+ estações de trabalho</span>
                  </li>
                </ul>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 md:py-32 bg-secondary/10">
        <div className="container max-w-6xl mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-foreground mb-12">Projetos em Destaque</h2>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 - Bortec Sistema */}
            <ScrollReveal delay={100}>
              <Card className="overflow-hidden border border-border hover:border-primary/50 transition group">
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 h-48 flex items-center justify-center">
                  <Code2 className="w-16 h-16 text-primary/30 group-hover:text-primary/50 transition" />
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-primary font-semibold text-lg">Bortec Sistema</h3>
                  <p className="text-muted-foreground text-sm">
                    Sistema completo de gestão de estoque e pedidos com backend em Spring Boot e interface moderna em React.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">Java 21</span>
                    <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">Spring Boot</span>
                    <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">React</span>
                  </div>
                  <a href="https://github.com/Josehelff/bortec-sistema" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="w-full gap-2 mt-4">
                      <ExternalLink className="w-4 h-4" />
                      Ver no GitHub
                    </Button>
                  </a>
                </div>
              </Card>
            </ScrollReveal>

            {/* Project 2 - Veterinário System */}
            <ScrollReveal delay={200}>
              <Card className="overflow-hidden border border-border hover:border-primary/50 transition group">
                <div className="bg-gradient-to-br from-accent/10 to-primary/10 p-8 h-48 flex items-center justify-center">
                  <Code2 className="w-16 h-16 text-accent/30 group-hover:text-accent/50 transition" />
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-primary font-semibold text-lg">Veterinário System</h3>
                  <p className="text-muted-foreground text-sm">
                    Sistema completo para veterinários com controle de animais, inseminações, prenhezes e cálculos automáticos.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">Java</span>
                    <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">Spring Boot</span>
                    <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">PostgreSQL</span>
                  </div>
                  <a href="https://github.com/Josehelff/veterinario-system" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="w-full gap-2 mt-4">
                      <ExternalLink className="w-4 h-4" />
                      Ver no GitHub
                    </Button>
                  </a>
                </div>
              </Card>
            </ScrollReveal>

            {/* Project 3 - Copa Shirt */}
            <ScrollReveal delay={300}>
              <Card className="overflow-hidden border border-border hover:border-primary/50 transition group">
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 h-48 flex items-center justify-center">
                  <Code2 className="w-16 h-16 text-primary/30 group-hover:text-primary/50 transition" />
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-primary font-semibold text-lg">Copa Shirt</h3>
                  <p className="text-muted-foreground text-sm">
                    Plataforma de e-commerce para venda de camisetas com painel administrativo e integração com redes sociais.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">TypeScript</span>
                    <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">React</span>
                    <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">Node.js</span>
                  </div>
                  <a href="https://github.com/Josehelff/copa_shirt" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="w-full gap-2 mt-4">
                      <ExternalLink className="w-4 h-4" />
                      Ver no GitHub
                    </Button>
                  </a>
                </div>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 md:py-32 bg-background">
        <div className="container max-w-6xl mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-foreground mb-12">Competências Técnicas</h2>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal delay={100}>
              <div className="space-y-6">
                <div>
                  <h3 className="text-primary font-semibold mb-4">Linguagens e Frameworks</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Java", "Spring Boot", "Spring MVC", "Spring Data JPA", "Hibernate", "Spring Security"].map((skill) => (
                      <span key={skill} className="bg-primary/10 text-primary px-4 py-2 rounded-lg text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-primary font-semibold mb-4">Banco de Dados</h3>
                  <div className="flex flex-wrap gap-2">
                    {["PostgreSQL", "SQL", "JPA/Hibernate"].map((skill) => (
                      <span key={skill} className="bg-primary/10 text-primary px-4 py-2 rounded-lg text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="space-y-6">
                <div>
                  <h3 className="text-primary font-semibold mb-4">Ferramentas e Tecnologias</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Git", "Docker", "APIs REST", "Maven", "Postman"].map((skill) => (
                      <span key={skill} className="bg-primary/10 text-primary px-4 py-2 rounded-lg text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-primary font-semibold mb-4">Competências Comportamentais</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Resolução de Problemas", "Aprendizado Contínuo", "Trabalho em Equipe", "Comunicação"].map((skill) => (
                      <span key={skill} className="bg-accent/10 text-accent px-4 py-2 rounded-lg text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container max-w-6xl mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="text-foreground mb-6">Vamos Conectar?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Estou aberto a novas oportunidades e desafios. Sinta-se livre para entrar em contato comigo através dos canais abaixo.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:josehelff@gmail.com">
                <Button size="lg" className="gap-2">
                  <Mail className="w-5 h-5" />
                  Enviar Email
                </Button>
              </a>
              <a href="https://github.com/Josehelff" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="gap-2">
                  <Github className="w-5 h-5" />
                  GitHub
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/josé-helff-185b15205/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="gap-2">
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </Button>
              </a>
              <a href="https://wa.me/5543988670356" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="gap-2">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </Button>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-background border-t border-border">
        <div className="container max-w-6xl mx-auto px-4 text-center text-muted-foreground text-sm">
          <p>© 2026 José Otávio Helff. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
