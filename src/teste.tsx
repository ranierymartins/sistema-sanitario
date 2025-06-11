import React from 'react';
import { 
  CheckCircle, 
  Clock, 
  Cloud, 
  FileText, 
  MapPin, 
  Smartphone, 
  Zap, 
  TrendingUp,
  Shield,
  Camera,
  Bell,
  BarChart3,
  Award,
  Users,
  Building2,
  ExternalLink,
  DollarSign,
  AlertTriangle,
  Percent,
  CalendarCheck,
  PieChart
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Shield className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">VigSan Digital</span>
            </div>
            <a href="https://ra1z.org/contact/">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Falar com Especialista
            </button>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              🚀 Solução Completa para Prefeitura
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Plataforma Integrada de {' '}
              <span className="bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent">
                Vigilância Sanitária
              </span>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Um sistema 100% em nuvem que unifica registro, vistorias, alvarás e integração com órgãos públicos 
              em uma única plataforma. Ideal para Prefeituras.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
              <div className="text-gray-600">Online</div>
            </div>
          </div>
        </div>
      </section>

      {/* Impacto na Arrecadação - Nova Seção Destacada */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              💰 Impacto Direto na Arrecadação Municipal
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Dados comprovados de prefeituras que aumentaram significativamente sua receita com a digitalização.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">+45%</div>
              <div className="text-green-100 text-lg font-medium mb-2">Aumento na Arrecadação</div>
              <div className="text-sm text-green-200">
                Média nacional de municípios que digitalizaram processos (CNM, 2023)
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">R$ 2,8M</div>
              <div className="text-green-100 text-lg font-medium mb-2">Receita Adicional/Ano</div>
              <div className="text-sm text-green-200">
                Fortaleza: R$ 1,2M + Recife: R$ 1,6M em novas empresas abertas
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <PieChart className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">+67%</div>
              <div className="text-green-100 text-lg font-medium mb-2">Mais Empresas Ativas</div>
              <div className="text-sm text-green-200">
                Aumento médio no número de empresas formalizadas
              </div>
            </div>
          </div>

          <div className="mt-12 bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              🎯 ROI Comprovado: Cada R$ 1 investido gera R$ 8,50 em retorno
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-2">Investimento Médio</div>
                <div className="text-3xl font-bold text-green-300">R$ 180k</div>
                <div className="text-sm text-green-200">Implementação completa do sistema</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-2">Retorno Anual</div>
                <div className="text-3xl font-bold text-green-300">R$ 1,53M</div>
                <div className="text-sm text-green-200">Economia + Aumento de arrecadação</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Casos de Sucesso */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Casos de Sucesso Comprovados
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Dados reais de municípios que já implementaram soluções digitais similares
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <Building2 className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Prefeitura de Fortaleza - CE</h3>
                  <p className="text-sm text-gray-600">Sistema Empresa Fácil Digital</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                  <span className="text-gray-700 font-medium">💰 Aumento na arrecadação</span>
                  <span className="text-2xl font-bold text-green-600">+52%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Redução no tempo de abertura</span>
                  <span className="text-2xl font-bold text-blue-600">85%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Empresas abertas em 2023</span>
                  <span className="text-2xl font-bold text-orange-600">12.847</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Receita adicional anual</span>
                  <span className="text-2xl font-bold text-green-600">R$ 1,2M</span>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100">
                <p className="text-sm text-gray-500">
                  Fonte: Secretaria de Desenvolvimento Econômico de Fortaleza, 2023
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <Award className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Prefeitura de Recife - PE</h3>
                  <p className="text-sm text-gray-600">Portal do Empreendedor</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                  <span className="text-gray-700 font-medium">💰 Receita adicional anual</span>
                  <span className="text-2xl font-bold text-green-600">R$ 1,6M</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Economia operacional anual</span>
                  <span className="text-2xl font-bold text-blue-600">R$ 2,1M</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Processos digitalizados</span>
                  <span className="text-2xl font-bold text-orange-600">98%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Tempo médio de aprovação</span>
                  <span className="text-2xl font-bold text-purple-600">3 dias</span>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100">
                <p className="text-sm text-gray-500">
                  Fonte: Prefeitura do Recife - Relatório de Gestão 2023
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Dados Nacionais - Transformação Digital Municipal</h3>
              <p className="text-gray-600">Pesquisa CNM (Confederação Nacional de Municípios) - 2023</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-3xl font-bold text-green-600 mb-2">+45%</div>
                <div className="text-sm text-gray-600 font-medium">💰 Aumento médio na arrecadação municipal após digitalização</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">67%</div>
                <div className="text-sm text-gray-600">dos municípios reduziram custos operacionais</div>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <div className="text-3xl font-bold text-orange-600 mb-2">78%</div>
                <div className="text-sm text-gray-600">de melhoria na satisfação dos cidadãos</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-3xl font-bold text-purple-600 mb-2">R$ 890k</div>
                <div className="text-sm text-gray-600">economia média anual por município (pop. 100k+)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais Competitivos */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Diferenciais Competitivos
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Revolucione a forma como sua prefeitura gerencia a legalização empresarial
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border border-blue-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Cloud className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">✅ TUDO ONLINE</h3>
              <p className="text-gray-600 leading-relaxed">
                De cadastro à emissão de alvarás, todo o processo é digital. 
                Elimine papelada e acelere aprovações.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl border border-green-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">✅ INTEGRAÇÃO AUTOMÁTICA</h3>
              <p className="text-gray-600 leading-relaxed">
                Conectado a JUCEMA, Vigilância Sanitária e SEI Maranhão em tempo real. 
                Sincronização instantânea de dados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Como Funciona
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Processo simplificado em 4 etapas para legalizar sua empresa rapidamente
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Smartphone className="w-10 h-10 text-white" />
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-3">1. Cadastro Relâmpago</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Camera className="w-4 h-4 mr-2 text-blue-600" />
                    Documentos digitalizados (câmera do celular!)
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                    Validação Digital
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-green-600 to-green-700 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-10 h-10 text-white" />
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-3">2. Vistoria Inteligente</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2 text-blue-600" />
                    Agendamento online
                  </div>
                  <div className="flex items-center">
                    <Camera className="w-4 h-4 mr-2 text-green-600" />
                    Envio de fotos/geolocalização
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-600 to-orange-700 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <FileText className="w-10 h-10 text-white" />
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-3">3. Alvará Express</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Zap className="w-4 h-4 mr-2 text-blue-600" />
                    Emissão em poucas horas (vs. 15 dias)
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                    Integração JUCEMA e Receita Federal
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Bell className="w-10 h-10 text-white" />
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-3">4. Acompanhamento</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Bell className="w-4 h-4 mr-2 text-blue-600" />
                    Notificações em tempo real
                  </div>
                  <div className="flex items-center">
                    <BarChart3 className="w-4 h-4 mr-2 text-green-600" />
                    Painel com status e prazos
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Benefícios Comprovados
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Resultados reais que transformam a gestão municipal
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 border border-gray-200">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-300">
                    <th className="text-left py-4 px-6 text-lg font-bold text-gray-900">Vantagem</th>
                    <th className="text-left py-4 px-6 text-lg font-bold text-gray-900">Impacto</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-white/50 transition-colors">
                    <td className="py-6 px-6">
                      <div className="flex items-center">
                        <DollarSign className="w-6 h-6 text-green-600 mr-3" />
                        <span className="font-semibold text-gray-900">Aumento de Arrecadação</span>
                      </div>
                    </td>
                    <td className="py-6 px-6">
                      <span className="text-2xl font-bold text-green-600">+45% em média</span>
                      <div className="text-sm text-gray-600">Mais empresas formalizadas = mais impostos</div>
                    </td>
                  </tr>
                  <tr className="hover:bg-white/50 transition-colors">
                    <td className="py-6 px-6">
                      <div className="flex items-center">
                        <TrendingUp className="w-6 h-6 text-blue-600 mr-3" />
                        <span className="font-semibold text-gray-900">Redução de Custos</span>
                      </div>
                    </td>
                    <td className="py-6 px-6">
                      <span className="text-2xl font-bold text-blue-600">Economia de R$ 890k/ano</span>
                      <div className="text-sm text-gray-600">em processos manuais (média nacional)</div>
                    </td>
                  </tr>
                  <tr className="hover:bg-white/50 transition-colors">
                    <td className="py-6 px-6">
                      <div className="flex items-center">
                        <BarChart3 className="w-6 h-6 text-orange-600 mr-3" />
                        <span className="font-semibold text-gray-900">Atração de Investimentos</span>
                      </div>
                    </td>
                    <td className="py-6 px-6">
                      <span className="text-2xl font-bold text-orange-600">Aumento de +67%</span>
                      <div className="text-sm text-gray-600">na abertura de empresas</div>
                    </td>
                  </tr>
                  <tr className="hover:bg-white/50 transition-colors">
                    <td className="py-6 px-6">
                      <div className="flex items-center">
                        <Shield className="w-6 h-6 text-purple-600 mr-3" />
                        <span className="font-semibold text-gray-900">Transparência</span>
                      </div>
                    </td>
                    <td className="py-6 px-6">
                      <span className="text-2xl font-bold text-purple-600">Rastreamento completo</span>
                      <div className="text-sm text-gray-600">de cada tramitação</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Fontes e Referências */}
            {/* Seção de Solução Específica */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Solução Customizada para São Mateus-MA
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Implementação em 2 fases com resultados em 90 dias
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <div className="flex items-center mb-6">
                <CalendarCheck className="w-10 h-10 text-blue-600 mr-4" />
                <h3 className="text-xl font-bold text-gray-900">Fase 1 Consultoria (30 dias)</h3>
              </div>
              <ul className="space-y-4 text-gray-700">

                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Consultoria Juridica</strong> Criação do código sanitário municipal atualizado
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Consultoria técnica e Documentação:</strong> Análise do processo e construção da documentação tecnológica
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <div className="flex items-center mb-6">
                <CalendarCheck className="w-10 h-10 text-blue-600 mr-4" />
                <h3 className="text-xl font-bold text-gray-900">Fase 2 Desenvolvimento (30 dias)</h3>
              </div>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Consultoria técnica:</strong> Entrega do código sanitário municipal atualizado
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Desenvolvimento:</strong> Construção da ferramenta tecnológica sob medida
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <div className="flex items-center mb-6">
                <CalendarCheck className="w-10 h-10 text-green-600 mr-4" />
                <h3 className="text-xl font-bold text-gray-900">Fase 3 Implantação e Treinamento (30 dias)</h3>
              </div>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Sistema de Licenciamento:</strong> Módulo sanitário integrado à Secretaria de Fazenda
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Portal do Contribuinte:</strong> Licenciamento eletrônico com pagamento integrado
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Capacitação:</strong> Treinamento da equipe da Vigilância Sanitária
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Benefícios Esperados */}
          <div className="mt-16 bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
              Benefícios Tangíveis Esperados
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                  <DollarSign className="w-6 h-6 text-green-600 mr-2" />
                  Impacto Financeiro
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Percent className="w-5 h-5 text-blue-600 mr-2 mt-0.5" />
                    <span>Recuperação de <strong>R$ 933.776+/ano</strong> em receitas municipais</span>
                  </li>
                  <li className="flex items-start">
                    <Percent className="w-5 h-5 text-blue-600 mr-2 mt-0.5" />
                    <span>Redução de <strong>65%</strong> em custos operacionais</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                  <Shield className="w-6 h-6 text-blue-600 mr-2" />
                  Impacto Sanitário
                </h4>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-2 px-4 text-sm font-medium text-gray-700">Indicador</th>
                        <th className="text-left py-2 px-4 text-sm font-medium text-gray-700">Atual</th>
                        <th className="text-left py-2 px-4 text-sm font-medium text-gray-700">Pós-Implantação</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="py-3 px-4 text-sm text-gray-700">Prazo para análise</td>
                        <td className="py-3 px-4 text-sm text-gray-700">90 dias</td>
                        <td className="py-3 px-4 text-sm font-bold text-green-600">15 dias</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-sm text-gray-700">Cobertura de fiscalização</td>
                        <td className="py-3 px-4 text-sm text-gray-700">35%</td>
                        <td className="py-3 px-4 text-sm font-bold text-green-600">95%</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-sm text-gray-700">Renovações em dia</td>
                        <td className="py-3 px-4 text-sm text-gray-700">42%</td>
                        <td className="py-3 px-4 text-sm font-bold text-green-600">98%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NOVA SEÇÃO DE PRECIFICAÇÃO */}
            <section className="py-20 bg-gray-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Investimento e Retorno Garantido
                  </h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Custo-benefício calculado com base no aumento de arrecadação
                  </p>
                </div>
      
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                  <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                      Estrutura de Custos
                    </h3>
                    
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">Item</th>
                            <th className="py-3 px-4 text-right text-sm font-medium text-gray-700">Valor (R$)</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          <tr>
                            <td className="py-4 px-4 text-sm font-medium text-gray-900">Consultoria Técnica</td>
                            <td className="py-4 px-4 text-sm text-right">10.000,00</td>
                          </tr>
                          <tr>
                            <td className="py-4 px-4 text-sm font-medium text-gray-900">Consultoria Jurídica (Código Tributário)</td>
                            <td className="py-4 px-4 text-sm text-right">10.000,00</td>
                          </tr>
                          <tr>
                            <td className="py-4 px-4 text-sm font-medium text-gray-900">Desenvolvimento</td>
                            <td className="py-4 px-4 text-sm text-right">30.000,00</td>
                          </tr>
                          <tr>
                            <td className="py-4 px-4 text-sm font-medium text-gray-900">Instalação e Treinamento</td>
                            <td className="py-4 px-4 text-sm text-right">20.000,00</td>
                          </tr>
                          <tr className="bg-blue-50 font-bold">
                            <td className="py-4 px-4">TOTAL IMPLEMENTAÇÃO</td>
                            <td className="py-4 px-4 text-right text-blue-600">70.000,00</td>
                          </tr>
                          <tr>
                            <td className="py-4 px-4 text-sm font-medium text-gray-900">Manutenção Mensal (opção 1)</td>
                            <td className="py-4 px-4 text-sm text-right">15.000,00 + 10% do arrecadado</td>
                          </tr>
                          <tr>
                            <td className="py-4 px-4 text-sm font-medium text-gray-900">Manutenção Mensal (opção 2)</td>
                            <td className="py-4 px-4 text-sm text-right">30.000,00 fixo</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
      
                  <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                      Projeção de Retorno
                    </h3>
                    
                    <div className="space-y-6">
                      <div className="p-6 bg-green-50 rounded-lg border border-green-200">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-bold text-gray-900">Arrecadação Anual Estimada</h4>
                            <p className="text-sm text-gray-600">Com o sistema implementado</p>
                          </div>
                          <div className="text-3xl font-bold text-green-600">R$ 933.776+</div>
                        </div>
                      </div>
      
                      <div className="p-6 bg-blue-50 rounded-lg border border-blue-200">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-bold text-gray-900">Ganho Mensal Estimado</h4>
                            <p className="text-sm text-gray-600"> </p>
                          </div>
                          <div className="text-3xl font-bold text-blue-600">R$ 77.800+</div>
                        </div>
                      </div>
      
                      <div className="p-6 bg-purple-50 rounded-lg border border-purple-200">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-bold text-gray-900">ROI no Primeiro Ano</h4>
                            <p className="text-sm text-gray-600">Considerando apenas arrecadação adicional</p>
                          </div>
                          <div className="text-3xl font-bold text-purple-600">217%</div>
                        </div>
                      </div>
      
                      <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                        <div className="flex">
                          <div className="flex-shrink-0">
                            <AlertTriangle className="h-5 w-5 text-yellow-400" />
                          </div>
                          <div className="ml-3">
                            <p className="text-sm text-yellow-700">
                              <strong>Observação:</strong> O ROI pode ser ainda maior considerando a economia com processos manuais e ganhos indiretos.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pronto para Revolucionar sua Prefeitura?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Junte-se às prefeituras que já reduziram burocracia e aumentaram a satisfação dos cidadãos
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href='https://ra1z.org/contact'>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-700 transition-colors">
              Falar com Especialista
            </button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="w-8 h-8 text-blue-400" />
                <span className="text-xl font-bold">VigSan Digital</span>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                Transformando a vigilância sanitária municipal através da tecnologia. 
                Mais agilidade, menos burocracia.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Soluções</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Legalização Express</li>
                <li>Vistorias Digitais</li>
                <li>Integração JUCEMA</li>
                <li>Relatórios BI</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contato</h3>
              <ul className="space-y-2 text-gray-400">
                <li> +55 (98) 98908-0020 </li>
                <li>contato@ra1z.org</li>
                <li>ra1z.org</li>

              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 RA1Z. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;