import { Module } from '@nestjs/common';
import { AdminModule as AdminBroModule } from '@admin-bro/nestjs';
import AdminBro from 'admin-bro';
import { Database, Resource } from '@admin-bro/typeorm';
import { DataOrmModule, OrmEntities } from '@nest-bro/data-orm';

AdminBro.registerAdapter({ Database, Resource });

@Module({
  imports: [
    DataOrmModule,
    AdminBroModule.createAdmin({
      adminBroOptions: {
        rootPath: '/admin',
        resources: [...OrmEntities],
      },
    }),
  ],
})
export class AdminModule {}
