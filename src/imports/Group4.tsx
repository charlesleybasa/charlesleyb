import imgRectangle8 from "figma:asset/fc92f8cf568f27285689839cca9ecf73488a63bc.png";
import imgImage2 from "figma:asset/68414cded50bbc914ace397165feabdfe8a973c0.png";
import imgImage3 from "figma:asset/d4fab2fddec05576e14e22704b19701f75022c11.png";
import imgFeaturedImage from "figma:asset/4de2ca5b5514601bc0ec53f18752b0cdd3473add.png";

function Frame2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[21px] items-start leading-[normal] left-[52px] not-italic top-[593px] w-[580px]">
      <p className="font-['Komika_Axis:Regular',sans-serif] relative shrink-0 text-[#f9d67a] text-[80px] w-full">UI/UX Design</p>
      <p className="font-['Montserrat:SemiBold',sans-serif] relative shrink-0 text-[35px] text-white w-full">Intuitive, user-first web and app interfaces.</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[8.563px] items-center px-[34.25px] py-[10.275px] relative shrink-0 size-[159.264px]">
      <div className="h-[138.714px] relative shrink-0 w-[89.051px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgRectangle8} />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex gap-[38px] items-center left-[55px] top-[913px]">
      <div className="relative shrink-0 size-[159.264px]" data-name="image 2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage2} />
      </div>
      <Frame />
      <div className="relative shrink-0 size-[159.264px]" data-name="image 3">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage3} />
      </div>
    </div>
  );
}

export default function Group() {
  return (
    <div className="relative size-full">
      <div className="absolute h-[1189px] left-0 rounded-bl-[53px] rounded-tl-[53px] rounded-tr-[53px] top-0 w-[699px]" />
      <div className="absolute h-[543px] left-[26px] rounded-bl-[53px] rounded-tl-[53px] rounded-tr-[53px] top-[27px] w-[653px]" data-name="Featured Image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-bl-[53px] rounded-tl-[53px] rounded-tr-[53px] size-full" src={imgFeaturedImage} />
      </div>
      <Frame2 />
      <Frame1 />
    </div>
  );
}