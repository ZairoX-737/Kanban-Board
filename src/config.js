const LIST_TYPES = {
    BACKLOG: 'backlog',
    READY: 'ready',
    IN_PROGRESS: 'inProgress',
    FINISHED: 'finished'
}
const LIST_COPY = {
    [LIST_TYPES.BACKLOG]: 'backlog',
    [LIST_TYPES.READY]: 'ready',
    [LIST_TYPES.IN_PROGRESS]: 'inProgress',
    [LIST_TYPES.FINISHED]: 'finished'
}

const LIST_COLORS = {
    [LIST_TYPES.BACKLOG]: '#df3e47',
    [LIST_TYPES.READY]: '#fbb13c',
    [LIST_TYPES.IN_PROGRESS]: '#7f7eff',
    [LIST_TYPES.FINISHED]: '#69DC9E'
}

export { LIST_TYPES, LIST_COPY, LIST_COLORS }