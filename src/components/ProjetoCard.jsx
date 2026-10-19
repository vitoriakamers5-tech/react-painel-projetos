import StatusBadge from './StatusBadge'
import TecnologiaTag from './TecnologiaTag'

function ProjetoCard({
  titulo,
  descricao,
  responsavel,
  status,
  tecnologias,
  destaque,
}) {
  return (
    <article className={`projeto-card ${destaque ? 'destaque' : ''}`}>
      {destaque && <strong className="projeto-destaque">★ Projeto em destaque</strong>}

      <h3>{titulo}</h3>
      <p>{descricao}</p>

      <p className="responsavel">
        Responsável: {responsavel}
      </p>

      <StatusBadge status={status} />

      <div className="tecnologias">
        {tecnologias.map((tecnologia) => (
          <TecnologiaTag
            key={tecnologia}
            nome={tecnologia}
          />
        ))}
      </div>
    </article>
  )
}

export default ProjetoCard
