import Button, {ButtonType} from "./button";

function App() {
    return (
        <div>
            <div>
                <Button type={ButtonType.PRIMARY}>PRIMARY - not rounded - filled</Button>
            </div>
            <div>
                <Button outline type={ButtonType.SECONDARY}>SECONDARY - not rounded - outlined</Button>
            </div>
            <div>
                <Button rounded type={ButtonType.DANGER}>DANGER - rounded - not outlined</Button>
            </div>
            <div>
                <Button rounded outline type={ButtonType.WARNING}>WARNING - rounded - outlined</Button>
            </div>
            <div>
                <Button rounded type={ButtonType.SUCCESS}>SUCCESS</Button>
            </div>
        </div>
    )
}

export default App