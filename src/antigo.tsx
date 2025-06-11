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
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Começar Agora
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              🚀 Solução Completa para Legalização Empresarial
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Transforme Burocracia em{' '}
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Agilidade
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-4 font-medium">
              Sua Empresa Legalizada em 48 Horas!
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Um sistema 100% em nuvem que unifica registro, vistorias, alvarás e integração com órgãos públicos 
              em uma única plataforma. Ideal para Empreendedores: Abra sua empresa sem papelada, filas ou demora.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Iniciar Legalização
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors">
              Ver Demonstração
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">48h</div>
              <div className="text-gray-600">Prazo de Legalização</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">15min</div>
              <div className="text-gray-600">Laudos por IA</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
              <div className="text-gray-600">Online</div>
            </div>
          </div>
        </div>
      </section>

      {/* Impacto na Arrecadação - Nova Seção Destacada */}
      <section className="py-20 bg-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              💰 Impacto Direto na Arrecadação Municipal
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Dados comprovados de prefeituras que aumentaram significativamente sua receita com a digitalização
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl border border-orange-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-orange-600 rounded-xl flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">✅ LAUDOS EM 15 MINUTOS</h3>
              <p className="text-gray-600 leading-relaxed">
                Vistorias validadas por IA com reconhecimento de imagens e documentos. 
                Análise inteligente e rápida.
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
                    Validação automática
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
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              📚 Fontes e Referências
            </h2>
            <p className="text-gray-600">
              Todos os dados apresentados são baseados em fontes oficiais e estudos comprovados
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3">CNM - Confederação Nacional de Municípios</h3>
              <p className="text-sm text-gray-600 mb-4">
                Pesquisa Nacional sobre Digitalização de Processos Municipais (2023)
              </p>
              <a 
                href="https://www.cnm.org.br/biblioteca/exibe/4832" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                Acessar Relatório <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3">SEBRAE Nacional</h3>
              <p className="text-sm text-gray-600 mb-4">
                Relatório sobre Ambiente de Negócios e Desburocratização Municipal
              </p>
              <a 
                href="https://www.sebrae.com.br/sites/PortalSebrae/estudos_pesquisas" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                Ver Estudos <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3">Banco Mundial</h3>
              <p className="text-sm text-gray-600 mb-4">
                Relatório Doing Business - Facilidade para Abrir Empresas no Brasil
              </p>
              <a 
                href="https://www.worldbank.org/en/programs/business-enabling-environment" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                Acessar Dados <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3">Prefeitura de Fortaleza</h3>
              <p className="text-sm text-gray-600 mb-4">
                Relatório de Gestão 2023 - Secretaria de Desenvolvimento Econômico
              </p>
              <a 
                href="https://www.fortaleza.ce.gov.br/transparencia/relatorios-de-gestao" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                Ver Relatório <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3">Prefeitura do Recife</h3>
              <p className="text-sm text-gray-600 mb-4">
                Portal da Transparência - Dados sobre Portal do Empreendedor
              </p>
              <a 
                href="https://www2.recife.pe.gov.br/pagina/portal-do-empreendedor" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                Acessar Portal <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3">JUCEMA - Junta Comercial do Maranhão</h3>
              <p className="text-sm text-gray-600 mb-4">
                Estatísticas de Abertura de Empresas e Digitalização de Processos
              </p>
              <a 
                href="https://www.jucema.ma.gov.br/estatisticas/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                Ver Estatísticas <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>

          <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex items-start">
              <Shield className="w-6 h-6 text-blue-600 mr-3 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Metodologia dos Dados</h3>
                <p className="text-sm text-gray-600">
                  Todos os dados de arrecadação e economia apresentados são baseados em relatórios oficiais de prefeituras 
                  que implementaram sistemas de digitalização similares. Os percentuais de aumento na arrecadação consideram 
                  o período de 12 meses após a implementação completa dos sistemas, comparado ao período anterior de mesma duração.
                </p>
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
            <button className="bg-white text-blue-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors shadow-lg">
              Solicitar Demonstração
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-700 transition-colors">
              Falar com Especialista
            </button>
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
                <li>(98) 3000-0000</li>
                <li>contato@vigsandigital.ma.gov.br</li>
                <li>São Luís - MA</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 VigSan Digital. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;