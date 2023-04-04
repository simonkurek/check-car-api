import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AutoPlateModule } from './auto-plate/auto-plate.module';
import { InfrastructureModule } from './infrastructure/infrastructure.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: +process.env.DB_PORT || 5432,
      username: process.env.DB_USERNAME || 'postgres',
      password: process.env.DB_PASSWORD || 'pass123',
      database: process.env.DB_NAME || 'sprawdzauto',
      autoLoadEntities: true,
      synchronize: true,
    }),
    AutoPlateModule,
    InfrastructureModule,
  ],
})
export class AppModule {}
