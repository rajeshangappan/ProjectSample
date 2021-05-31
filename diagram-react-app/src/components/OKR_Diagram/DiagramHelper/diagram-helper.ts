import { DiagramComponent } from "@syncfusion/ej2-react-diagrams";
import { Util } from "../../../model/util";
import { CustomDiagramLayout } from "./diagram-layout";
export class DiagramHelper {
    diagramIns: DiagramComponent;
    layout: CustomDiagramLayout;
    constructor(diagramInstance) {
        this.SetDiagramInstance(diagramInstance);
    }
    SetDiagramInstance(diagramInstance: DiagramComponent) {
        this.diagramIns = diagramInstance;
        if (Util.IsNullOrUndefined(this.layout)) {
            this.layout = new CustomDiagramLayout(this.diagramIns);
        }
    }
    public OnDiagramCreated(diagramInstance: DiagramComponent) {
        this.SetDiagramInstance(diagramInstance);
        this.layout.DockToTop(diagramInstance);
        this.diagramIns.nodes.forEach((item, index, array) => {
            item.visible = true;
        });
        this.diagramIns.connectors.forEach((item, index, array) => {
            item.visible = true;
        });
    }
}