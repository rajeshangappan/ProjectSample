import React from 'react';
import styles from './OKR_Diagram.module.css';
import { ConnectorModel, DiagramComponent, NodeModel, SnapConstraints, Inject, IClickEventArgs } from "@syncfusion/ej2-react-diagrams";
import { DiagramHelper } from './DiagramHelper/diagram-helper';

const OKR_Diagram: React.FC = () => (
  // <div className={styles.OKR_Diagram} data-testid="OKR_Diagram">
  //   OKR_Diagram Component
  // </div>
  <DiagramComponent id="diagram" ref={diagram => (DiagramHelper.diagramInstance = diagram)}
    width={'1000px'}
    height={'600px'}
    snapSettings={{ constraints: SnapConstraints.None }}
    nodes={DiagramHelper.nodes}
    getNodeDefaults={(node: NodeModel): NodeModel => {
      return DiagramHelper.getNodeDefaults(node);
    }}
    getConnectorDefaults={(connector: ConnectorModel): ConnectorModel => {
      return DiagramHelper.getConnectorDefaults(connector);
    }}
    created={() => { DiagramHelper.onCreated() }}
    click={(args: IClickEventArgs) => { DiagramHelper.onClick(args) }}>
    <Inject services={[]}></Inject>
  </DiagramComponent>
);
export default OKR_Diagram;
