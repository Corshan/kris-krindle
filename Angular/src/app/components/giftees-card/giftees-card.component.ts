import {Component, input, SimpleChanges} from '@angular/core';
import {TuiCardLarge, TuiHeader} from '@taiga-ui/layout';
import {TuiAppearance, TuiTitle} from '@taiga-ui/core';
import {KrisKindle} from '../../../shared';
import {NgForOf} from '@angular/common';
import {tuiSum} from '@taiga-ui/cdk';

@Component({
  selector: 'app-giftees-card',
  imports: [
    TuiCardLarge,
    TuiAppearance,
    TuiHeader,
    TuiTitle,
    NgForOf
  ],
  templateUrl: './giftees-card.component.html',
  styleUrl: './giftees-card.component.css'
})
export class GifteesCardComponent {
  names = input<string[]>([]);
  krisKindle: KrisKindle[] = [];

  ngOnChanges(changes: SimpleChanges) {
    this.krisKindle = this.generateKrisKindle([...this.names()]);
  }

  private generateKrisKindle(names: string[]): KrisKindle[] {
    // If there's fewer than 2 names, return an empty array
    if (names.length < 2) return [];

    // Create a copy of the array to avoid modifying the original
    const shuffledNames = [...names];

    // Shuffle the names array to randomize the order
    for (let i = shuffledNames.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledNames[i], shuffledNames[j]] = [shuffledNames[j], shuffledNames[i]]; // Swap elements
    }

    // Create pairs by pairing gifter with the next person in the shuffled array
    return shuffledNames
      .map((gifter, index) => {
        return {
          gifter,
          giftee: shuffledNames[(index + 1) % shuffledNames.length]
        };
      });
  }
}
