import * as React from "react";
import "./App.css";
import { ConnectorModel, DiagramComponent, NodeModel, SnapConstraints, Inject, DiagramConstraints, IDoubleClickEventArgs, Annotation, Node, Connector, NodeConstraints, AnnotationConstraints, ConnectorShape, PointPortModel, PortVisibility } from "@syncfusion/ej2-react-diagrams";
import { Util } from "./model/util"
let diagramInstance: DiagramComponent;
export class NodeInfo {
  public isLeftMidPort: boolean = false;
  public isExpanded: boolean = false;
  constructor(_isExpanded?: boolean) {
    this.isExpanded = (_isExpanded === null || this.isExpanded === undefined) ? false : this.isExpanded;
  }
}

let leftMidPort: PointPortModel = {
  style: {
    strokeColor: '#366F8C',
    fill: '#366F8C'
  },
  shape: 'Square',
  id: 'left-mid-port',
  visibility: PortVisibility.Hidden,
  offset: {
    x: 0,
    y: 0.5
  }
};
let rightMidPort: PointPortModel = {
  style: {
    strokeColor: '#366F8C',
    fill: '#366F8C'
  },
  shape: 'Square',
  id: 'right-mid-port',
  visibility: PortVisibility.Hidden,
  offset: {
    x: 1,
    y: 0.5
  }
};
let leftPortNodeInfo: NodeInfo = new NodeInfo();
leftPortNodeInfo.isLeftMidPort = true;
let nodes: NodeModel[] = [
  {
    id: "node1",
    offsetX: 5,
    offsetY: 5,
    width: 100,
    height: 25,
    annotations: [{ content: "child1" }],
    data: new NodeInfo()
  },
  {
    id: "node2",
    offsetX: 5,
    offsetY: 35,
    width: 100,
    height: 25,
    annotations: [{ content: "child2" }],
    data: new NodeInfo()
  },
  {
    id: "node3",
    offsetX: 5,
    offsetY: 65,
    width: 100,
    height: 25,
    annotations: [{ content: "child3" }],
    data: new NodeInfo()
  },
  {
    id: 'group1',
    offsetX: 400,
    offsetY: 100,
    children: ['node1', 'node2', 'node3'],
    style: {
      fill: '#6BA5D7',
      strokeColor: 'black'
    },
    annotations: [{ offset: { x: 0.5, y: -0.1 }, content: "group1" }]
  },
  {
    id: "node4",
    offsetX: 5,
    offsetY: 5,
    width: 100,
    height: 25,
    annotations: [{ content: "child4" }],
    data: leftPortNodeInfo
  },
  {
    id: "node5",
    offsetX: 5,
    offsetY: 35,
    width: 100,
    height: 25,
    annotations: [{ content: "child5" }],
    data: new NodeInfo()
  },
  {
    id: "node6",
    offsetX: 5,
    offsetY: 65,
    width: 100,
    height: 25,
    annotations: [{ content: "child6" }],
    data: new NodeInfo()
  },
  {
    id: 'group2',
    offsetX: 620,
    offsetY: 70,
    children: ['node4', 'node5', 'node6'],
    style: {
      fill: '#6BA5D7',
      strokeColor: 'black'
    },
    annotations: [{ offset: { x: 0.5, y: -0.1 }, content: "group2" }],
    visible: false
  },
  {
    id: "node7",
    offsetX: 5,
    offsetY: 5,
    width: 100,
    height: 25,
    annotations: [{ content: "child7" }],
    data: new NodeInfo()
  },
  {
    id: "node8",
    offsetX: 5,
    offsetY: 35,
    width: 100,
    height: 25,
    annotations: [{ content: "child8" }],
    data: new NodeInfo()
  },
  {
    id: "node9",
    offsetX: 5,
    offsetY: 65,
    width: 100,
    height: 25,
    annotations: [{ content: "child9" }],
    data: new NodeInfo()
  },
  {
    id: 'group3',
    offsetX: 620,
    offsetY: 200,
    children: ['node7', 'node8', 'node9'],
    style: {
      fill: '#6BA5D7',
      strokeColor: 'black'
    },
    annotations: [{ offset: { x: 0.5, y: -0.1 }, content: "group3" }],
    visible: false
  },
  {
    id: "node10",
    offsetX: 5,
    offsetY: 5,
    width: 100,
    height: 25,
    annotations: [{ content: "child10" }],
    data: new NodeInfo()
  },
  {
    id: "node11",
    offsetX: 5,
    offsetY: 35,
    width: 100,
    height: 25,
    annotations: [{ content: "child11" }],
  },
  {
    id: "node12",
    offsetX: 5,
    offsetY: 65,
    width: 100,
    height: 25,
    annotations: [{ content: "child12" }],
    data: new NodeInfo(),
  },
  {
    id: 'group4',
    offsetX: 620,
    offsetY: 320,
    children: ['node10', 'node11', 'node12'],
    style: {
      fill: '#6BA5D7',
      strokeColor: 'black'
    },
    annotations: [{ offset: { x: 0.5, y: -0.1 }, content: "group4" }],
    visible: false
  }
];

let connectors: ConnectorModel[] = [
  {
    id: "link1",
    sourceID: "node1",
    targetID: "node4",
    annotations: [{ content: "link1" }],
  },
  {
    id: "link2",
    sourceID: "node1",
    targetID: "node5",
    annotations: [{ content: "link2" }],
  },
  {
    id: "link3",
    sourceID: "node1",
    targetID: "node6",
    annotations: [{ content: "link3" }],
  },
  {
    id: "link4",
    sourceID: "node2",
    targetID: "node7",
    annotations: [{ content: "link4" }],
  },
  {
    id: "link5",
    sourceID: "node2",
    targetID: "node8",
    annotations: [{ content: "link5" }],
  },
  {
    id: "link6",
    sourceID: "node2",
    targetID: "node9",
    annotations: [{ content: "link6" }],
  },
  {
    id: "link7",
    sourceID: "node3",
    targetID: "node10",
    annotations: [{ content: "link7" }],
  },
  {
    id: "link8",
    sourceID: "node3",
    targetID: "node11",
    annotations: [{ content: "link8" }],
  },
  {
    id: "link9",
    sourceID: "node3",
    targetID: "node12",
    annotations: [{ content: "link9" }],
  }
];

export default class App extends React.Component<{}, {}> {
  render() {
    return <DiagramComponent id="diagram" ref={diagram => (diagramInstance = diagram)}
      width={'1000px'}
      height={'600px'}
      snapSettings={{ constraints: SnapConstraints.None }}
      nodes={nodes}
      getNodeDefaults={(node: NodeModel): NodeModel => {
        // if (node.data !== null && node.data !== undefined) {
        //   let nodeInfo: NodeInfo = (node.data as NodeInfo);
        //   if (nodeInfo !== null && nodeInfo.isLeftMidPort) {
        node.ports = [leftMidPort, rightMidPort];
        // }
        // }
        node.constraints = NodeConstraints.Default & ~NodeConstraints.Select;
        for (let i: number = 0; i < node.annotations.length; i++)
          node.annotations[i].constraints = AnnotationConstraints.ReadOnly;
        return node;
      }}
      getConnectorDefaults={(connector: ConnectorModel): ConnectorModel => {
        connector.sourceDecorator = {
          shape: 'Circle',
          // Defines the style for the sourceDecorator
          style: {
            // Defines the strokeWidth for the sourceDecorator
            strokeWidth: 3,
            // Defines the strokeColor for the sourceDecorator
            strokeColor: 'red'
          }
        }
        // Decorator shape - Diamond
        connector.targetDecorator = {
          // Defines the custom shape for the connector's target decorator
          shape: 'Custom',
          //Defines the  path for the connector's target decorator
          pathData: 'M80.5,12.5 C80.5,19.127417 62.59139,24.5 40.5,24.5 C18.40861,24.5 0.5,19.127417 0.5,12.5' +
            'C0.5,5.872583 18.40861,0.5 40.5,0.5 C62.59139,0.5 80.5,5.872583 80.5,12.5 z',
          //defines the style for the target decorator
          style: {
            // Defines the strokeWidth for the targetDecorator
            strokeWidth: 3,
            // Defines the strokeColor for the sourceDecorator
            strokeColor: 'green',
            // Defines the opacity for the sourceDecorator
            opacity: .8
          },
        }
        connector.type = "Bezier";

        connector.sourcePortID = 'right-mid-port';
        connector.targetPortID = 'left-mid-port';

        return connector;
      }}

      created={
        () => {
          for (let i: number = 0; i < connectors.length; i++) {
            connectors[i].visible = false;
            diagramInstance.add(connectors[i]);
          }
          // diagramInstance.constraints = DiagramConstraints.Default & ~DiagramConstraints.PageEditable
        }
      }

      doubleClick={(args: IDoubleClickEventArgs) => {
        if (args.source instanceof Node) {
          debugger;
          let node: Node = args.source as Node;
          if (node != null) {
            ExpandCollapseNode(node);
            diagramInstance.refreshDiagram();
          }
        }
      }}
    >
      <Inject services={[]}></Inject>

    </DiagramComponent>
  }
}

function ExpandCollapseNode(node: Node) {
  let expandInfo: NodeInfo = node.data as NodeInfo;
  let isExpand: boolean = !expandInfo.isExpanded;
  let connectorIds: string[] = node.outEdges;
  let connectorObj: ConnectorModel;
  let nodeObj: NodeModel;
  let parentId: string;
  for (let i: number = 0; i < connectorIds.length; i++) {
    connectorObj = diagramInstance.getConnectorObject(connectorIds[i]);
    nodeObj = diagramInstance.getNodeObject(connectorObj.targetID);
    let c: ConnectorModel = diagramInstance.connectors.find(({ id }) => id === connectorObj.id);
    c.visible = isExpand;
    parentId = diagramInstance.getParentId(nodeObj.id);
    if (parentId !== '' && parentId !== null) {
      let n: NodeModel = diagramInstance.nodes.find(({ id }) => id === parentId);
      n.visible = isExpand;
    }
    expandInfo.isExpanded = isExpand;
  }
}