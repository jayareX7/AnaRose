import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
          <script async src="https://cdn.snipcart.com/themes/v3.0.23/default/snipcart.js"></script>
          <div hidden id="snipcart" data-api-key="YzY4MmJmZGMtNTRhNi00ZGIzLTkwMDgtMmY5NDgwYzE4MjQ3NjM3Mzc1NTE4NTE1ODEzMDQw"></div>
       <>
<script src="//widget.simplybook.me/v2/widget/widget.js"></script>

    <script
            dangerouslySetInnerHTML={{
              __html: `
                      var widget = new SimplybookWidget({
    "widget_type": "button",
    "url": "https:\/\/testenviroment.simplybook.me",
    "theme": "hugo",
    "theme_settings": {
      "timeline_hide_unavailable": "0",
      "timeline_show_end_time": "0",
      "timeline_modern_display": "as_slots",
      "nav_bg_color": "#ffffff",
      "sb_base_color": "#00b5b8",
      "display_item_mode": "block",
      "body_bg_color": "#ffffff",
      "sb_review_image": "",
      "dark_font_color": "#454545",
      "light_font_color": "#353f5e",
      "sb_company_label_color": "#ffffff",
      "hide_img_mode": "0",
      "show_sidebar": "1",
      "sb_busy": "#dad2ce",
      "sb_available": "#d3e0f1"
    },
    "timeline": "modern",
    "datepicker": "top_calendar",
    "is_rtl": false,
    "app_config": {
      "allow_switch_to_ada": 0,
      "predefined": []
    },
    "button_title": "Book Now",
    "button_background_color": "#00b5b8",
    "button_text_color": "#ffffff",
    "button_position": "right",
    "button_position_offset": "55%"
  });
</script>
  
                  `,
            }}
          ></script>
  
  </>
        </body>
      </Html>
    )
  }
}
