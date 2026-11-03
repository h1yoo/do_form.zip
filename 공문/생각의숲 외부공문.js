var Integration = Backbone.View.extend({
	initialize: function (options) {
		this.options = options || {};
		this.docModel = this.options.docModel;
		this.variables = this.options.variables;
		this.infoData = this.options.infoData;
	},
	render: function () {
    
	},

	renderViewMode: function () {
		/* 읽기모드에서 함수가 필요한 경우 구현 */
		var html1 = ""; // 결재선(#ttt) 전용
    // var html2 = ""; // 합의선(#ttt2) 전용

    // 결재선 처리 -> #ttt 출력
    $('.sign_type1_inline').each(function (index2, item) {
      $(item).find('.sign_member').each(function (index, member) {
        var signRank = $(member).find('.sign_rank').text() || "";
        var stampSrc = $(member).find('.sign_stamp img').attr("src");
        var signDate = $(member).find('.sign_date').text();
				var signName = $(member).find('.sign_name').text();
        // var displayContent = "<div></div>";

        if (signRank !== undefined) {
          // flex-shrink: 0 을 통해 가로 정렬 시 박스가 줄어들거나 밑으로 밀리는 현상 방지
          html1 += `
            <div style="display: flex; flex-shrink: 0; justify-content: space-between; box-sizing: border-box;">
              <!-- 직위 (좌측) -->
              <div style="font-weight: noraml; font-size: 9pt; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; width: 60px;">
                ${signRank}
              </div>
              <!-- 도장 / 날짜 (우측) -->
              <div style="display: flex; flex-direction: column; justify-content: center; width: 140px;">
                <p style="font-size: 9pt; white-space: nowrap;">${signName}</p>
              </div>
            </div>
          `;
        }
      });
    });

    $('#ttt').html(html1);

	},

	onEditDocument: function () {
		/* '수정 ' 버튼을 눌렀을때 실행. */
	},

	beforeSave: function () {
	},

	
	afterSave: function () {
	},

	validate: function () {

		return true;
	},

	getDocVariables: function () {
		/* getDocVariables 사용 하려면 return 소스 코드 구현 */
	}
});
return Integration;
