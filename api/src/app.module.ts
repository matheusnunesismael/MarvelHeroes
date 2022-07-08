import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { HeroesModule } from './heroes/heroes.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    HeroesModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
