
import Vue, { VNode } from 'vue';
import * as tsx from "vue-tsx-support";
import { Component, Prop, Watch } from 'vue-property-decorator';


interface FormAttributes {
    
}


@Component({
    name: "io-form"
})
export default class Form extends tsx.Component<FormAttributes>{

    render() {
        return <div>Hello world</div>;
    }
}