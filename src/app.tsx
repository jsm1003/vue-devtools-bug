import {
  Component,
  Vue,
  Prop,
  Inject,
  Model,
  Provide,
  Watch,
} from 'vue-property-decorator';

@Component
export default class App extends Vue {
  items= Array.from({length: 10000}).map((_, index) => index)

  renderItems() {
    return this.items.map((item: any) => (
      <div class="item" key={item}>{item}</div>
    ))
  }

  render() {
    return (
      <div id="app">
        <test source={this.renderItems()}></test>
      </div>
    )
  }
}
