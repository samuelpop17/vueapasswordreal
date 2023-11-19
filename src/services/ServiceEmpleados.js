import axios from 'axios';
import Global from './../Global';

export default class ServiceEmpleados {
  autorizarEmpleados (usuario) {
    return new Promise (function (resolve) {
      var request = 'auth/login';
      var url = Global.urlApiAuth + request;
      axios.post (url, usuario).then (response => {
        resolve (response);
      });
    });
  }

  getEmpleados () {
    return new Promise (function (resolve) {
      var request = 'api/empleados';
      var url = Global.urlApiAuth + request;
      var token = Global.autoriza;

      axios.get(url, {headers:{'Authorization':'bearer '+token}}).then(response => {
        resolve(response);
      })
    });
  }
}
