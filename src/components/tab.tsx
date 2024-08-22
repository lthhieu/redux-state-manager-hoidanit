import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import TableComponent from './table';

function TabComponent() {
    return (
        <Tabs
            defaultActiveKey="users"
            id="uncontrolled-tab-example"
            className="my-3"
        >
            <Tab eventKey="users" title="Users">
                <TableComponent />
            </Tab>
            <Tab eventKey="blog" title="Blogs">
                Tab content for Profile
            </Tab>
        </Tabs>
    );
}

export default TabComponent;