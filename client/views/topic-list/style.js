/*eslint-disable */
export const topicPrimaryStyle = (theme) => {
  return {
    root: {
      display: 'flex',
      alignItems: 'center',
    },
    title: {
      textDecoration: 'none',
      color: '#555',
    },
    tab: {
      backgroundColor: '#2196F3',
      textAlign: 'center',
      display: 'inline-block',
      padding: '0 6px',
      color: '#fff',
      borderRadius: 3,
      marginRight: 10,
      fontSize: '12px',
      flexShrink: 0,
    },
    good: {
      backgroundColor: theme.palette.accent[600],
    },
    top: {
      backgroundColor: theme.palette.accent[200],
    },
  }
}

export const topicSecondaryStyle = (theme) => {
  return {
    root: {
      display: 'flex',
      alignItems: 'center',
      paddingTop: 3,
      flexWrap: 'wrap',
    },
    count: {
      textAlign: 'center',
      marginRight: 20,
    },
    username: {
      marginRight: 20,
      color: '#9e9e9e',
    },
    accentColor: {
      color: theme.palette.accent[500],
    },
  }
}

export const topicListStyle = () => {
  return {
    root: {
      margin: 24,
      marginTop: 80,
    },
    loading: {
      display: 'flex',
      justifyContent: 'space-around',
    },
  }
}

export default topicPrimaryStyle
/* eslint-enable */
