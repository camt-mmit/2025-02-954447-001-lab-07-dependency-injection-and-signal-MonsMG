import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-example-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './example-root.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleRoot {}
