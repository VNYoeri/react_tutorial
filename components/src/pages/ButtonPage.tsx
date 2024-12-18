import Button, {ButtonType} from "../components/Button";
import React from "react";
import {GoBell, GoDatabase, GoDownload} from "react-icons/go";

function ButtonPage() {
    return (
        <div>
            <div>
                <Button type={ButtonType.PRIMARY}>
                    <GoBell /> PRIMARY - not rounded - filled
                </Button>
            </div>
            <div>
                <Button outline type={ButtonType.SECONDARY} className='mb-5'>
                    <GoDownload /> SECONDARY - not rounded - outlined
                </Button>
            </div>
            <div>
                <Button rounded type={ButtonType.DANGER}>
                    <GoDatabase /> DANGER - rounded - not outlined
                </Button>
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

export default ButtonPage