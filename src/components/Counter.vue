<script>
  import { connect } from '../store/vue-redux'

  import * as Types from '../store/types'

  const component = {
    render () {
      return (
        <div class="counter__container">
          <h1>Count: { this.count }</h1>
          <button class="btn" onClick={ this.increment }>INCREMENT</button>
          <button class="btn" onClick={ this.decrement }>DECREMENT</button>
        </div>
      )
    }
  }

  const mapStateToProps = state => {
    return {
      count: state.counter
    }
  }

  const mapDispatchToProps = dispatch => {
    return {
      increment () {
        dispatch({ type: Types.INCREMENT })
      },
      decrement () {
        dispatch({ type: Types.DECREMENT })
      }
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(component)
</script>

<style lang="scss" scoped>
  .counter__container {
    padding: 40x;

    .btn + .btn {
      margin-left: 20px;
    }
  }
</style>

