/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Collection, // @ts-ignore
  ActionEvent, // @ts-ignore
  Archived, // @ts-ignore
  Member,
} from "@prisma/client";

export class CollectionServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.CollectionCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.CollectionCountArgs>
  ): Promise<number> {
    return this.prisma.collection.count(args);
  }

  async collections<T extends Prisma.CollectionFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CollectionFindManyArgs>
  ): Promise<Collection[]> {
    return this.prisma.collection.findMany(args);
  }
  async collection<T extends Prisma.CollectionFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.CollectionFindUniqueArgs>
  ): Promise<Collection | null> {
    return this.prisma.collection.findUnique(args);
  }
  async createCollection<T extends Prisma.CollectionCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CollectionCreateArgs>
  ): Promise<Collection> {
    return this.prisma.collection.create<T>(args);
  }
  async updateCollection<T extends Prisma.CollectionUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CollectionUpdateArgs>
  ): Promise<Collection> {
    return this.prisma.collection.update<T>(args);
  }
  async deleteCollection<T extends Prisma.CollectionDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.CollectionDeleteArgs>
  ): Promise<Collection> {
    return this.prisma.collection.delete(args);
  }

  async findActionEvents(
    parentId: string,
    args: Prisma.ActionEventFindManyArgs
  ): Promise<ActionEvent[]> {
    return this.prisma.collection
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .actionEvents(args);
  }

  async findArchiveds(
    parentId: string,
    args: Prisma.ArchivedFindManyArgs
  ): Promise<Archived[]> {
    return this.prisma.collection
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .archiveds(args);
  }

  async findMembers(
    parentId: string,
    args: Prisma.MemberFindManyArgs
  ): Promise<Member[]> {
    return this.prisma.collection
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .members(args);
  }
}
