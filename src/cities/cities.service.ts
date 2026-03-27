import { Injectable, NotImplementedException } from '@nestjs/common';

@Injectable()
export class CitiesService {
  public search(_search: string, _limit?: unknown): string[] {
    // TODO (candidate): Implement search using Cities.CITIES with:
    // - partial match
    // - case-insensitive and accent-insensitive comparison
    // - limit handling (query param, default 10, max 50)
    // - alphabetical ordering
    throw new NotImplementedException('Implement cities autocomplete search');
  }
}
