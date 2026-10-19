function StatusBadge({ status }) {
  let classe = 'status-badge'

  if (status === 'Concluído') {
    classe += ' status-concluido'
  } else if (status === 'Em desenvolvimento') {
    classe += ' status-desenvolvimento'
  } else if (status === 'Planejamento') {
    classe += ' status-planejamento'
  }

  return (
    <span className={classe}>
      {status}
    </span>
  )
}

export default StatusBadge
