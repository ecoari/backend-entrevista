import { Controller, Get, Param, Query } from '@nestjs/common';
import { CitiesService } from './cities.service';

@Controller('v1/cities')
export class CitiesController {
  public constructor(private readonly citiesService: CitiesService) {}

  @Get(':search')
  public searchCities(@Param('search') search: string, @Query('limit') limit?: string): string[] {
    return this.citiesService.search(search, limit);
  }
}
