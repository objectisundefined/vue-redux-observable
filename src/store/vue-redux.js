let _Vue

const install = Vue => {
  _Vue = Vue

  _Vue.mixin({
    beforeCreate () {
      const options = this.$options

      if (options && options.propsData && options.propsData.store) {
        this.$store = typeof options.store === 'function'
          ? options.propsData.store()
          : options.propsData.store
      } else if (options && options.parent && options.parent.$store) {
        this.$store = options.parent.$store
      }
    }
  })
}

export const Provider = {
  name: 'Provider',
  props: {
    store: {
      required: true
    }
  },
  render () {
    return this.$slots.default[0]
  }
}

const convert = f => val => {
  return Object.keys(val).reduce((acc, x) => {
    acc[x] = f(x, val[x])

    return acc
  }, {})
}

export const connect = (mapStateToProps, mapDispatchToProps) => component => {
  let vm

  return {
    ...component,
    beforeCreate () {
      vm = new _Vue({
        data: () => {
          return mapStateToProps(this.$store.getState())
        }
      })

      this.$options.computed = {
        ...(component.computed || Object.create(null)),
        ...(convert((k, v) => function () { return vm[k] })(mapStateToProps(this.$store.getState())))
      }

      this.$options.methods = {
        ...(component.methods || Object.create(null)),
        ...(mapDispatchToProps(this.$store.dispatch))
      }

      vm._unsubscribe = this.$store.subscribe(() => Object.assign(vm, mapStateToProps(this.$store.getState())))

      component.beforeCreate && component.beforeCreate.call(this)
    },
    beforeDestroy () {
      vm._unsubscribe()
      vm.$destroy(true)
      vm = null

      component.beforeDestroy && component.beforeDestroy.call(this)
    }
  }
}

export default {
  install
}
