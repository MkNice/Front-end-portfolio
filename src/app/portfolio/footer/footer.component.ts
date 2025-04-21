import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FooterBrandingComponent } from "./footer-branding/footer-branding.component";
import { FooterLinksComponent } from "./footer-links/footer-links.component";

@Component({
  selector: 'app-footer',
  imports: [FooterBrandingComponent, FooterLinksComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent { }
