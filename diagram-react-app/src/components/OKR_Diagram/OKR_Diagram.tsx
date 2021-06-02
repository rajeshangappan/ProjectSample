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
    width={'1400px'}
    height={'800px'}
    snapSettings={{ constraints: SnapConstraints.None }}
    getNodeDefaults={(node: NodeModel) => {
      node.pivot.x = 0;
      node.pivot.y = 0;
    }}
    getConnectorDefaults={(connector: ConnectorModel) => {
      connector.type = "Bezier";
      connector.cornerRadius = 7;
      connector.targetDecorator.height = 7;
      connector.targetDecorator.width = 7;
      connector.style.strokeColor = "#6d6d6d";
      connector.visible = false;
    }}
    layout={
      {
        type: "ComplexHierarchicalTree",
        connectionPointOrigin: ConnectionPointOrigin.SamePoint,
        horizontalSpacing: 50,
        verticalSpacing: 50,
        orientation: "LeftToRight",
        margin: { left: 10, right: 0, top: 50, bottom: 0 }
      }
    }
    dataSourceSettings={{
      id: "objectiveUniqueId",
      parentId: "parent",
      dataSource: new DataManager(okrJsonData as JSON[]),
      doBinding: (nodeModel: NodeModel, data: OkrJsonDataInfo, diagram: Diagram) => {
        nodeModel.annotations = [{
          content: data["objectiveUniqueId"]
        }];
        nodeModel.width = 200;
        nodeModel.height = 100;
        nodeModel.style = {
          // fill: "#e7704c",
          strokeWidth: 1,
          strokeColor: "#c15433"
        };
        nodeModel.visible = false;
        nodeModel.shape = {
          type: "Basic",
          shape: "Rectangle",
          cornerRadius: 7
        };
      }
    }}
    created={() => { diagramHelper.OnDiagramCreated(diagramInstance); }}
  >
    <Inject services={[DataBinding, ComplexHierarchicalTree, LineDistribution]}></Inject>

  </DiagramComponent>
);
export default OKR_Diagram;
