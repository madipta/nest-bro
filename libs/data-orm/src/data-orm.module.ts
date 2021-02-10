import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrmEntities } from './orm-entities';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'kosong',
      database: 'offline',
      entities: [...OrmEntities],
      synchronize: false,
    }),
  ],
})
export class DataOrmModule {}
