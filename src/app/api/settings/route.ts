import getCurrentUser from '@/actions/getCurrentUser';
import prismaClient from '@/libs/prismadb';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const currentUser = await getCurrentUser();
    const body = await req.json();
    const { name, image } = body;

    if (!currentUser?.id) return new NextResponse('Unauthorized', { status: 401 });

    const updatedUser = await prismaClient.user.update({
      where: {
        id: currentUser.id,
      },
      data: {
        image,
        name,
      },
    });

    return NextResponse.json(updatedUser);
  } catch (err) {
    console.log(err);
    return new NextResponse('Internal server error', { status: 500 });
  }
}
