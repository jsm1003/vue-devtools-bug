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
export default class Example extends Vue {
  items= Array.from({length: 10}).map((_, index) => index)

  renderItems() {
    return this.items.map((item) => (
      <div class="item" key={item}>{item}</div>
    ))
  }

  render() {
    return (
      <div>
        <test source={this.renderItems()}></test>
      </div>
    )
  }
}