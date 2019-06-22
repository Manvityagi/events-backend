import React from "react";
//import { render } from "react-dom";
import Tabs from "./components/Tabs";
//import glamorous from "glamorous";
import Addevent from './Addevent'
import Pastevent from './Pastevent'
import Ongoingevent from './Ongoingevent'
import Futureevent from './Futureevent'
import Cancelledevent from './Cancelledevent'
const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const ClientEvents = () => (
  <div style={styles}>
    <Tabs
      activeTab={{
        id: "tab1"
      }}
    >
      <Tabs.Tab id="tab1" title="Add an Event">
        <Addevent/>
      </Tabs.Tab>
      <Tabs.Tab id="tab2" title="Past Events">
        <Pastevent/>
      </Tabs.Tab>
      <Tabs.Tab id="tab3" title="Ongoing Events">
        <Ongoingevent/>
      </Tabs.Tab>
      <Tabs.Tab id="tab4" title="Future Events">
        <Futureevent/>
      </Tabs.Tab>
      <Tabs.Tab id="tab5" title="Cancelled Events">
        <Cancelledevent/>
      </Tabs.Tab>
    </Tabs>
  </div>
);

export default ClientEvents