import {
  Component,
  Vue,
  Prop,
  Inject,
  Model,
  Provide,
  Watch,
} from 'vue-property-decorator';

import './test.css';

@Component
export default class Test extends Vue {
  @Prop({ type: Array }) source!: any[];

  render() {
    return <div class="test">{this.source}</div>;
  }
}
