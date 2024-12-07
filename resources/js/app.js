import "./bootstrap";
import { createApp } from "vue";
import ExampleComponent from "./components/ExampleComponent.vue";
import AnotherComponent from "./components/AnotherComponent.vue";

// コンポーネントのマッピング
const components = [
    {
        id: "example-component",
        component: ExampleComponent,
    },
    {
        id: "another-component",
        component: AnotherComponent,
    },
    // 新しいコンポーネントが必要な場合はここに追加
];

// コンポーネントを動的にマウントする関数
const mountComponent = ({ id, component }) => {
    const element = document.getElementById(id);
    if (element) {
        const app = createApp(component);
        app.mount(`#${id}`);
    }
};

// 各コンポーネントをループで処理
components.forEach(mountComponent);
