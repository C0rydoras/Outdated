import Component from '@glimmer/component';

export default class ProjectCompactComponent extends Component {
  get icon() {
    let { project } = this.args;
    switch (project.status) {
      case 'OUTDATED':
        return 'bolt';
      case 'WARNING':
        return 'warning';
      case 'UP-TO-DATE':
        return 'check';
    }
  }
  get version(){
    let { project }  = this.args;
    return project.versions.toArray()[0];
  }
}
