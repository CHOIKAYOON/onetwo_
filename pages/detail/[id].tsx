import type { NextPage } from "next";

import Image from 'next/image';

import ArrowbackImg from 'asset/detail/arrowback.png';
import KeepgrayImg from 'asset/detail/keepgray.png';
import ShareImg from 'asset/detail/share.png';

import GroupImg from 'asset/detail/group.png';
import Photo1Img from 'asset/detail/photo1.png';
import Photo2Img from 'asset/detail/photo2.png';
import Photo3Img from 'asset/detail/photo3.png';

import { Wrap } from '../../pageSlice/detailSlice/styled';

const detail: NextPage = ({ id }: any) => {
  return (
    <div>

      <div className="flex justify-between p-4">
        <Image src={ArrowbackImg} width={24} height={24} alt="" />

        <div>
          <Image src={KeepgrayImg} width={24} height={24} alt="" />
          <Image src={ShareImg} width={24} height={24} alt="" />
        </div>
      </div>

      <div className="p-4 text-xl font-extrabold" >
        <p>에스프레소바를 가고 싶지만</p>
        <p>가고싶지만 시간이 없어</p>
      </div>

      <div className="p-5 border-t">

        <div className="flex justify-between items-center">
          <div className="flex text-sm font-extrabold items-center mb-8">
            <Image className="rounded-full" alt="" width={50} height={50} src="data:image/jpeg;base64,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" />
            <p className="ml-2 py-2">통행료 내라고</p>
          </div>

          <div className="flex w-18 h-10 p-2 bg-green-500 rounded-full items-center">
            <Image src={GroupImg} width={22} height={20} alt="" />
            <p className="ml-2 text-sm font-bold">1 /3</p>
          </div>
        </div>

        <div className="border flex">
          <Image src={Photo1Img} alt="" width={157} height={200} />
          <Image src={Photo2Img} alt="" width={122} height={115} />
          <Image src={Photo3Img} alt="" width={120} height={160} />
          <Image src={Photo1Img} alt="" width={155} height={147} />
        </div>

        <div>chip</div>
        <div>리뷰</div>

        <div>주소 Box</div>
        <div>footer</div>

      </div>
    </div>
  )
}

export default detail;