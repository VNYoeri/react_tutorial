import Accordion from "../components/Accordion";

function AccordionPage() {

    const items = [
        {
            id: 'blubbsadf',
            label: 'First label',
            content: 'First content'
        },
        {
            id: 'blubbsadfzxdcds',
            label: 'Second label',
            content: 'Second content'
        },
        {
            id: 'blubbsadfqwer',
            label: 'Third label',
            content: 'Third content'
        }
    ]

    return <Accordion items={items}/>

}

export default AccordionPage;