import { TestBed } from '@angular/core/testing';
import { CardDinamicoComponent } from './card-dinamico.component';
describe('CardDinamicoComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CardDinamicoComponent]
        })
            .compileComponents();
    });
    beforeEach(() => {
        fixture = TestBed.createComponent(CardDinamicoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=card-dinamico.component.spec.js.map