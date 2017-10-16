import { Component, Inject } from 'ng-metadata/core'

@Component({
  selector: 'app',
  template: require('./app.component.html')
})
export class AppComponent {
  _counter = 0
  _name = "Porawit Poboonma"
  _todos = []

  newTodo = ''

  constructor( @Inject('$scope') public $scope: ng.IScope) {

  }

  // create a getter to test if angular really access this value
  get name() {
    console.log('name: accessed')
    return this._name
  }

  get counter() {
    console.log('counter: accessed')
    return this._counter
  }

  get todos() {
    console.log('todos: accessed')
    return this._todos
  }

  addTodo() {
    this._todos.push(this.newTodo)
    this.newTodo = ''
    this.$scope.$broadcast('$$rebind::todo')
  }

  increment() {
    this._counter++
    this.$scope.$broadcast('$$rebind::counter')
  }

  changeName() {
    this._name = 'ball6847'
    this.$scope.$broadcast('$$rebind::name')
  }
}
