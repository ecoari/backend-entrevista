import { Controller, Get, Param, Query } from '@nestjs/common';
import { CitiesService } from './cities.service';
import { SearchCitiesQueryDto } from './dto/search-cities-query.dto';

@Controller('v1/cities')
export class CitiesController {
  public constructor(private readonly citiesService: CitiesService) {}

  @Get(':search')
  public searchCities(
    @Param('search') search: string,
    @Query() query: SearchCitiesQueryDto,
  ): string[] {
    return this.citiesService.search(search, query.limit);
  }
}

