import React from 'react';
import styles from './OKR_Diagram.module.css';
import { ConnectorModel, DiagramComponent, NodeModel, SnapConstraints, Inject, IClickEventArgs, DataBinding, MindMap, ComplexHierarchicalTree, LineDistribution, ConnectionPointOrigin, Diagram } from "@syncfusion/ej2-react-diagrams";
import { DiagramHelper } from './DiagramHelper/diagram-helper';
import { DataManager } from "@syncfusion/ej2-data";
import okrJsonData, { OkrJsonDataInfo } from './DiagramHelper/okr_data';

let diagramInstance: DiagramComponent;
let diagramHelper: DiagramHelper = new DiagramHelper(diagramInstance);
const OKR_Diagram: React.FC = () => (
  <DiagramComponent id="diagram" ref={diagram => (diagramInstance = diagram)}
    width={'1000px'}
    height={'600px'}
    snapSettings={{ constraints: SnapConstraints.None }}
    getNodeDefaults={(node: NodeModel) => {
      node.visible = false;
    }}
    getConnectorDefaults={(connector: ConnectorModel) => {
      connector.visible = false;
    }}
    layout={
      {
        type: "ComplexHierarchicalTree",
        connectionPointOrigin: ConnectionPointOrigin.SamePoint,
        horizontalSpacing: 40,
        verticalSpacing: 40,
        orientation: "LeftToRight",
        margin: { left: 10, right: 0, top: 50, bottom: 0 }
      }
    }
    dataSourceSettings={{
        id: "id",
        parentId: "parent",
        dataSource: new DataManager(okrJsonData as JSON[]),
        doBinding: (nodeModel: NodeModel, data: OkrJsonDataInfo, diagram: Diagram) => {
          nodeModel.annotations = [{
            content: data["name"]
          }]
          nodeModel.width = 100;
          nodeModel.height = 50;
          nodeModel.style = {
            fill: "#e7704c",
            strokeWidth: 1,
            strokeColor: "#c15433"
          };
        }
      }}
    created={() => { diagramHelper.OnDiagramCreated(diagramInstance); }}
  >
    <Inject services={[DataBinding, ComplexHierarchicalTree, LineDistribution]}></Inject>

  </DiagramComponent>
);
export default OKR_Diagram;
