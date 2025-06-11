 import React from 'react';
import { 
  // Ícones anteriores...
  ClipboardList,
  AlertTriangle,
  CalendarCheck,
  Percent,
  Target,
  Home,
  Truck,
  ClipboardCheck,
  CheckCircle,
  DollarSign,
  Shield
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header mantido igual */}

      {/* Hero Section adaptada para São Mateus */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              🚀 Solução Especial para São Mateus-MA
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Transforme a Fiscalização Sanitária em{' '}
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Resultados Reais
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-4 font-medium">
              Recupere R$ 933.776/ano em receitas municipais!
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Sistema integrado que resolve os 4 problemas críticos da Vigilância Sanitária municipal:
              controle de alvarás, integração com REDESIM, fiscalização eficiente e código sanitário atualizado.
            </p>
          </div>
          
          {/* Botões CTA mantidos */}
        </div>
      </section>

      {/* Seção específica para o Diagnóstico de São Mateus */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Diagnóstico Atual em São Mateus-MA
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Dados atualizados conforme Relatório Técnico de Junho/2025
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-red-50 p-8 rounded-2xl border-l-4 border-red-600">
              <div className="flex items-center mb-4">
                <AlertTriangle className="w-8 h-8 text-red-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Problemas Críticos Identificados</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  Fiscalização ineficiente de 800 estabelecimentos de médio risco
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  Controle manual de alvarás (renovações e taxas não cobradas)
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  Falta de integração com REDESIM e desalinhamento com ANVISA
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  Código sanitário municipal desatualizado
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 p-8 rounded-2xl border-l-4 border-blue-600">
              <div className="flex items-center mb-4">
                <ClipboardList className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Impactos Diretos</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="font-semibold text-gray-900 mb-1">💰 Perda Financeira</div>
                  <p className="text-gray-700">
                    R$ 933.776/ano não arrecadados (R$ 77.800/mês) conforme Código Tributário Municipal
                  </p>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">🏥 Riscos Sanitários</div>
                  <p className="text-gray-700">
                    Infraestruturas insalubres e risco de surtos por alimentos sem controle adequado
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Projeção de Arrecadação - Tabela Detalhada */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Projeção de Arrecadação com Gestão Eficiente
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Base: Código Tributário Municipal (Lei Complementar nº 003/2019) e 800 estabelecimentos
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-blue-600 to-green-600 text-white">
                <tr>
                  <th className="py-4 px-6 text-left">Categoria de Taxa</th>
                  <th className="py-4 px-6 text-right">Valor Unitário (R$)</th>
                  <th className="py-4 px-6 text-right">Quantidade</th>
                  <th className="py-4 px-6 text-right">Valor Total (R$)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-4 px-6 flex items-center">
                    <ClipboardCheck className="w-5 h-5 text-blue-600 mr-2" />
                    Renovação de Alvará
                  </td>
                  <td className="py-4 px-6 text-right">43,68</td>
                  <td className="py-4 px-6 text-right">800</td>
                  <td className="py-4 px-6 text-right font-bold">34.944,00</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 flex items-center">
                    <Home className="w-5 h-5 text-blue-600 mr-2" />
                    Taxa de Abertura
                  </td>
                  <td className="py-4 px-6 text-right">87,37</td>
                  <td className="py-4 px-6 text-right">800</td>
                  <td className="py-4 px-6 text-right font-bold">69.896,00</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 flex items-center">
                    <Target className="w-5 h-5 text-blue-600 mr-2" />
                    Análise de Projetos (≥ 200 m²)
                  </td>
                  <td className="py-4 px-6 text-right">128,00</td>
                  <td className="py-4 px-6 text-right">800</td>
                  <td className="py-4 px-6 text-right font-bold">102.400,00</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 flex items-center">
                    <AlertTriangle className="w-5 h-5 text-blue-600 mr-2" />
                    Taxa de Fiscalização (médio risco)
                  </td>
                  <td className="py-4 px-6 text-right">496,90</td>
                  <td className="py-4 px-6 text-right">800</td>
                  <td className="py-4 px-6 text-right font-bold">397.520,00</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 flex items-center">
                    <Truck className="w-5 h-5 text-blue-600 mr-2" />
                    Fiscalização para Transporte de Alimentos
                  </td>
                  <td className="py-4 px-6 text-right">166,54</td>
                  <td className="py-4 px-6 text-right">400</td>
                  <td className="py-4 px-6 text-right font-bold">66.616,00</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 flex items-center">
                    <ClipboardList className="w-5 h-5 text-blue-600 mr-2" />
                    Alvará Sanitário (≥ 200 m²)
                  </td>
                  <td className="py-4 px-6 text-right">328,00</td>
                  <td className="py-4 px-6 text-right">800</td>
                  <td className="py-4 px-6 text-right font-bold">262.400,00</td>
                </tr>
                <tr className="bg-gray-50 font-bold">
                  <td className="py-4 px-6" colSpan="3">TOTAL GERAL</td>
                  <td className="py-4 px-6 text-right text-green-600">R$ 933.776,00</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
            <div className="flex">
              <div className="flex-shrink-0">
                <AlertTriangle className="h-5 w-5 text-yellow-600" />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-yellow-800">Atenção</h3>
                <div className="mt-2 text-sm text-yellow-700">
                  <p>
                    Estes valores representam receitas já previstas em lei municipal (Lei Complementar nº 003/2019, Art. 406) 
                    que não estão sendo arrecadadas devido à gestão ineficiente dos processos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                    <strong>Consultoria técnica:</strong> Criação do código sanitário municipal atualizado
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Integração técnica:</strong> REDESIM interligado à JUCEMA
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

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <div className="flex items-center mb-6">
                <CalendarCheck className="w-10 h-10 text-blue-600 mr-4" />
                <h3 className="text-xl font-bold text-gray-900">Fase 2 Desenvolvimento (30 dias)</h3>
              </div>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Consultoria técnica:</strong> Criação do código sanitário municipal atualizado
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Integração técnica:</strong> REDESIM interligado à JUCEMA
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

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <div className="flex items-center mb-6">
                <CalendarCheck className="w-10 h-10 text-green-600 mr-4" />
                <h3 className="text-xl font-bold text-gray-900">Fase 3 Implantação (30 dias)</h3>
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
                    <strong>Processo independente:</strong> Rito específico sanitário com prazos próprios
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
                    <span>Recuperação de <strong>R$ 933.776/ano</strong> em receitas municipais</span>
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
                          <div className="text-3xl font-bold text-green-600">R$ 933.776</div>
                        </div>
                      </div>
      
                      <div className="p-6 bg-blue-50 rounded-lg border border-blue-200">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-bold text-gray-900">Ganho Mensal Estimado</h4>
                            <p className="text-sm text-gray-600"> </p>
                          </div>
                          <div className="text-3xl font-bold text-blue-600">R$ 77.800</div>
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

      {/* Demais seções podem ser mantidas com adaptações para mencionar São Mateus */}
      
      
      {/* CTA Final Adaptado */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pronto para Recuperar R$ 933.776/ano para São Mateus?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Implemente a solução completa em 90 dias e transforme a gestão da Vigilância Sanitária municipal
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
              Agendar Demonstração
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-colors">
              Baixar Relatório Completo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;