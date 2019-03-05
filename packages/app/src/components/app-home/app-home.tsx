import { Component } from '@stencil/core';
import '@zucker/core'

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: false
})
export class AppHome {
  render() {
    return (
      <zucker-logo></zucker-logo>
    );
  }
}
