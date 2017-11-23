<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    render () {
      return (
        <div class="hello">
          <img class="logo" src={ require('../assets/vue-logo.png') } />
          <img class="logo logo--redux" src={ require('../assets/redux-logo.png') } />
          <img class="logo" src={ require('../assets/redux-observable-logo.gif') } />

          <h1>{ this.msg }</h1>
          <h2>App Links</h2>
          <ul>
            <li>
              <router-link to="hello">hello</router-link>
            </li>
            <li>
              <router-link to="counter">counter</router-link>
            </li>
            <li>
              <router-link to="ping">ping</router-link>
            </li>
          </ul>
        </div>
      )
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }

  .hello {
    .logo {
      width: 120px;
      height: 120px;
    }

    .logo--redux {
      margin-right: 16px;
    }
  }
</style>
