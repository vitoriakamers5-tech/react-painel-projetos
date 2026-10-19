import './App.css'

import Cabecalho from './components/Cabecalho'
import Secao from './components/Secao'
import Resumo from './components/Resumo'
import ProjetoCard from './components/ProjetoCard'
import Rodape from './components/Rodape'

const projetos = [
  {
    id: 1,
    titulo: 'Sistema de Estoque',
    descricao: 'Controle de produtos e movimentações.',
    responsavel: 'Ana',
    status: 'Concluído',
    tecnologias: ['React', 'Node.js', 'PostgreSQL'],
    destaque: true,
  },
  {
    id: 2,
    titulo: 'Loja Virtual',
    descricao: 'Plataforma para venda de produtos pela internet.',
    responsavel: 'Lucas',
    status: 'Em desenvolvimento',
    tecnologias: ['React', 'CSS', 'JavaScript'],
    destaque: true,
  },
  {
    id: 3,
    titulo: 'Aplicativo de Tarefas',
    descricao: 'Organização de tarefas e atividades diárias.',
    responsavel: 'Mariana',
    status: 'Concluído',
    tecnologias: ['React', 'Firebase'],
    destaque: false,
  },
  {
    id: 4,
    titulo: 'Portal Educacional',
    descricao: 'Área para compartilhar conteúdos escolares.',
    responsavel: 'Pedro',
    status: 'Em desenvolvimento',
    tecnologias: ['HTML', 'CSS', 'JavaScript'],
    destaque: false,
  },
  {
    id: 5,
    titulo: 'Sistema de Biblioteca',
    descricao: 'Cadastro de livros e controle de empréstimos.',
    responsavel: 'Julia',
    status: 'Planejamento',
    tecnologias: ['React', 'Node.js'],
    destaque: false,
  },
  {
    id: 6,
    titulo: 'Controle Financeiro',
    descricao: 'Organização de receitas e despesas.',
    responsavel: 'Gabriel',
    status: 'Concluído',
    tecnologias: ['React', 'JavaScript'],
    destaque: false,
  },
]

function App() {
  const total = projetos.length

  const concluidos = projetos.filter(
    (projeto) => projeto.status === 'Concluído',
  ).length

  const emDesenvolvimento = projetos.filter(
    (projeto) => projeto.status === 'Em desenvolvimento',
  ).length

  return (
    <>
      <Cabecalho />

      <main className="painel">
        <Secao titulo="Resumo dos projetos">
          <Resumo
            total={total}
            concluidos={concluidos}
            emDesenvolvimento={emDesenvolvimento}
          />
        </Secao>

        <Secao titulo="Nossos projetos">
          <div className="lista-projetos">
            {projetos.map((projeto) => (
              <ProjetoCard
                key={projeto.id}
                titulo={projeto.titulo}
                descricao={projeto.descricao}
                responsavel={projeto.responsavel}
                status={projeto.status}
                tecnologias={projeto.tecnologias}
                destaque={projeto.destaque}
              />
            ))}
          </div>
        </Secao>
      </main>

      <Rodape />
    </>
  )
}

export default App
