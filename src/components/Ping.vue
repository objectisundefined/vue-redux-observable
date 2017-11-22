<script>
  import { connect } from '../store/vue-redux'
  import * as Types from '../store/types'

  const ping = () => ({ type: Types.PING })

  const Ping = {
    render () {
      return (
        <div>
          <h1>is pinging: { String(this.isPinging) }</h1>
          <button onClick={ () => this.dispatch(ping()) }>
            Start PING
          </button>
        </div>
      )
    }
  }

  const mapStateToProps = state => ({
    isPinging: state.ping.isPinging
  })

  const mapDispatchToProps = dispatch => ({
    dispatch
  })

  export default connect(mapStateToProps, mapDispatchToProps)(Ping)
</script>
